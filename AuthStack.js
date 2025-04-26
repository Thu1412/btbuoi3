import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginSceens from './LoginSceens';
import SigupSceens from './SigupSceens';
import ResetpassSceens from './ResetpassSceens';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginSceens} />
      <Stack.Screen name="Signup" component={SigupSceens} />
      <Stack.Screen name="ResetPassword" component={ResetpassSceens} />
    </Stack.Navigator>
  );
}
