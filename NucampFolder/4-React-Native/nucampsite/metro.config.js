const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  return {
    ...defaultConfig,
    // Add any custom Metro configuration here, if needed.
  };
})();