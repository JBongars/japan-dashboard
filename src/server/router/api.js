const express = require("express");
const httpProxy = require("http-proxy");
const router = express.Router();
const config = require("../config");
const logger = require("../logger");

const proxy = new httpProxy.createProxyServer();

router.use("/prefecture", (req, res) => {
  logger.info(`Redirecting request to ${config.prefectureApi.host}`);
  return proxy.web(req, res, { target: `${config.prefectureApi.host}` });
});

router.get("/hello", (req, res) => {
  logger.info("hit!");

  res.status(200).send("ok");
});

module.exports = router;
