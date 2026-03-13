/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'ts-jest' // <--- also transpile JS files
  },
  transformIgnorePatterns: [
    '/node_modules/(?!some-esm-package/)' // transpile problematic ESM packages
  ],
};