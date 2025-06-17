// Mock file for react-native-svg
jest.mock('react-native-svg', () => {
  return {
    __esModule: true,
    default: 'Svg',
    G: 'G',
    Path: 'Path',
  };
});
