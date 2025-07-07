module.exports = {
  project: {
    ios: {
      automaticPodsInstallation: true,
    },
    android: {},
  },
  dependencies: {
    'react-native-flipper': {
      platforms: {
        ios: null,
      },
    },
  },
};
