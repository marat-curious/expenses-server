const path = require('path');

module.exports = async () => {
  return {
    rootDir: path.resolve(__dirname),
    verbose: true,
  };
};
