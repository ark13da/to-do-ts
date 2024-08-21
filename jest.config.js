// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy", // Mock CSS modules
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mock regular styles
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
