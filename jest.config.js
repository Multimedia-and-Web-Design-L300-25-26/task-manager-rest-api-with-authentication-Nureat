export default {
  testEnvironment: "node",
  setupFiles: ["./tests/jest-env.js"],
  setupFilesAfterEnv: ["./tests/jest-db-setup.js"],
  testTimeout: 30000
};