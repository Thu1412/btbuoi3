import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Logic/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
