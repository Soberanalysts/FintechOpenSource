// module.exports = {
//   preset: 'react-native',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // 💡 테스트 환경 확장 (예: matchers)
//   transformIgnorePatterns: [
//     'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|react-redux)',
//   ],
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   testMatch: ['**/__tests__/**/*.test.(js|ts|tsx)'],
// };
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|react-redux)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.test.(js|ts|tsx)'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  }
};