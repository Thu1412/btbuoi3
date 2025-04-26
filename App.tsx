import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Logic/AuthStack';

const App = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);

export default App;
