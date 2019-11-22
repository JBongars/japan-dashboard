module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    ".next",
    "<rootDir>/src/assets"
  ],
  setupFiles: ["<rootDir>/config/jest/polyfills.js"],
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.js"],
  testMatch: ["<rootDir>/src/**/*.spec.ts", "<rootDir>/src/**/*.spec.tsx"],
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.(svg)$": "<rootDir>/config/jest/fileTransform.js"
  },
  moduleNameMapper: {
    "^.+\\.(s?css)$": "<rootDir>/config/jest/cssTransform.js"
  }
  // "snapshotSerializers": ["enzyme-to-json/serializer"]
};
