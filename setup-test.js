import MockAsyncStorage from 'mock-async-storage/jest';
import jest from "jest";

const mockImpl = new MockAsyncStorage();
jest.mock('@react-native-community/async-storage', () => mockImpl);
