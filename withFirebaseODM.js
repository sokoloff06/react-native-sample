const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

module.exports = function withFirebaseODM(config) {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const podfilePath = path.join(config.modRequest.projectRoot, 'ios', 'Podfile');
      let podfileContent = fs.readFileSync(podfilePath, 'utf-8');
      
      const configLine = "$RNFirebaseAnalyticsGoogleAppMeasurementOnDeviceConversion = true";
      
      if (!podfileContent.includes(configLine)) {
        // Prepend the configuration line
        podfileContent = configLine + "\n" + podfileContent;
        fs.writeFileSync(podfilePath, podfileContent);
        console.log('Added Firebase ODM flag to Podfile');
      }
      
      return config;
    },
  ]);
};
