import '@testing-library/jest-native/extend-expect'; // 🔥 toHaveTextContent 등 사용 가능
import 'react-native-gesture-handler/jestSetup';

// 필요시 모킹할 것들 (예: react-navigation)
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
