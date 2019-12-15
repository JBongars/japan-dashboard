// Run using Node v10

const express = require("express");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const next = require("next");
const expressHealthCheck = require("express-healthcheck");
const logger = require("./logger");
const config = require("./config");
const pageRouter = require("./router/pages");
const apiRouter = require("./router/api");
const responses = require("./constants/responses");
const app = next(require("../../config/next"));

app.prepare().then(() => {
  const server = express();

  server.locals.serverPort = config.serverPort;

  // Define middlewares
  server.use(compression());
  server.use(helmet());
  server.use(cors());
  server.use(express.json());
  server.get("/up", expressHealthCheck());

  // Allow next to handle server side rendering
  server.get(`${config.rootPath}/service-worker.js`, (req, res) => {
    let filePath = path.join(__dirname, ".next", "/service-worker.js");
    // this is required because we have dedicated server/ and client/ folders
    filePath = filePath.replace("/server/", "/client/");
    app.serveStatic(req, res, filePath);
  });

  server.use(`${process.env.ROOT}/api`, apiRouter);
  server.use(express.static(path.join(__dirname, "../../public")));
  server.use(process.env.ROOT, pageRouter(app));

  // Error handler middleware
  // eslint-disable-next-line no-unused-vars
  server.use((err, req, res, next) => {
    logger.error(err);
    const error = {
      status: err.status || responses.SERVER_ERROR.status,
      message: err.message || responses.SERVER_ERROR.message
    };
    res.status(error.status).json(error);
    next(err); // to allow sentry monitoring
  });

  server.listen(config.serverPort, err => {
    if (err) throw err;
    logger.info(`Running on environment ${config.environment}`);
    logger.info(`> Ready on http://localhost:${config.serverPort}`);
  });
});
