import '@testing-library/jest-native/extend-expect'; // 🔥 toHaveTextContent 등 사용 가능
import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);


// 필요시 모킹할 것들 (예: react-navigation)
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// 🔥 Appearance API mock
jest.mock('react-native/Libraries/Utilities/Appearance', () => ({
  getColorScheme: jest.fn(() => 'light'),
  addChangeListener: jest.fn(),
  removeChangeListener: jest.fn(),
}));