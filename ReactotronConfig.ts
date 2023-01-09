import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

declare global {
  interface Console {
    tron: typeof Reactotron | { log: () => null; display: () => null };
  }
}

const reactotron = __DEV__
  ? Reactotron.configure() // controls connection & communication settings
      .setAsyncStorageHandler(AsyncStorage)
      .useReactNative() // add all built-in react native plugins
      .connect() // let's connect!
  : {
      createEnhancer: undefined,
      log: () => null,
      clear: () => null,
      display: () => null,
    };

reactotron.clear();

console.tron = reactotron;

// eslint-disable-next-line no-console
console.log = () => {};

export default reactotron;
