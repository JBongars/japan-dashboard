const http = require("http");

module.exports = {
  NOT_FOUND: {
    status: 404,
    message: http.STATUS_CODES[404]
  },
  SERVER_ERROR: {
    status: 500,
    message: http.STATUS_CODES[500]
  }
};
