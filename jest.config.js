const path = require('path');

module.exports = async () => {
  return {
    rootDir: path.resolve(__dirname),
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    verbose: true,
  };
};
