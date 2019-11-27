const routesHandler = require("next-routes");

const routes = routesHandler().add("root", "index");

module.exports = function makeHandler(app) {
  return routes.getRequestHandler(app);
};
