import React from 'react';
import Screens from './src/screens';
import { StatusBar } from 'react-native';

StatusBar.setBarStyle('dark-content')
StatusBar.setBackgroundColor('transparent')
StatusBar.setTranslucent(true)

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}


const App = () => {
  return <Screens />;
};

export default App;
