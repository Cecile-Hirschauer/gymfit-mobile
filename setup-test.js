import MockAsyncStorage from 'mock-async-storage/jest';

const mockImpl = new MockAsyncStorage();
jest.mock('@react-native-community/async-storage', () => mockImpl);
