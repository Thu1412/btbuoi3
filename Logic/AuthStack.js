import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dangnhap from '.Logic/Dangnhap';
import Taotaikhoan from './Logic/Taotaikhoan';
import Laylaimatkhau from './Logic/Laylaimatkhau';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dangnhap" component={Dangnhap} />
    <Stack.Screen name="Taotaikhoan" component={Taotaikhoan} />
    <Stack.Screen name="Laylaimatkhau" component={Laylaimatkhau} />
  </Stack.Navigator>
);

export default AuthStack;
