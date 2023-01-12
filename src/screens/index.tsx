import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './login/Login';
import { Home } from './home/Home';
import { Registrar } from './registrar/Registrar';

const Stack = createStackNavigator();

const Screens: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Registrar'} component={Registrar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
