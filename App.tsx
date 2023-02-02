import React from 'react';
import Screens from './src/screens';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';

StatusBar.setBarStyle('dark-content');
StatusBar.setBackgroundColor('transparent');
StatusBar.setTranslucent(true);

//Variavel global INavigation para TypeAnnotation do navigation
declare global {
  type INavigation = {
    navigate: (value: string, ...params) => void;
    goBack: () => void;
  };
}

const App = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default App;
