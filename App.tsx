import React from 'react';
import Screens from './src/screens';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';

StatusBar.setBarStyle('dark-content');
StatusBar.setBackgroundColor('transparent');
StatusBar.setTranslucent(true);

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default App;
