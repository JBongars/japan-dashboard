module.exports = {
  environment: process.env.NODE_ENV || "development",
  logLevel: process.env.LOG_LEVEL || "info",
  serverPort: process.env.PORT || 8080,
  rootPath: process.env.ROOT || "",
  prefectureApi: {
    host: "http://localhost:5000/prefecture"
  }
};
