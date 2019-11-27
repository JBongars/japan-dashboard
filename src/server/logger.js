const winston = require("winston");
const config = require("./config");

const consoleTransport = new winston.transports.Console({
  format: winston.format.simple()
});

const logger = winston.createLogger({
  logLevel: config.logLevel,
  transports: [consoleTransport]
});

logger.info(`Logger level: ${logger.level}`);

module.exports = logger;
