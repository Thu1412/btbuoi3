import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dangnhap from './Dangnhap';
import Taotaikhoan from './Taotaikhoan';
import Laylaimatkhau from './Laylaimatkhau';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dangnhap" component={Dangnhap} />
    <Stack.Screen name="Taotaikhoan" component={Taotaikhoan} />
    <Stack.Screen name="Laylaimatkhau" component={Laylaimatkhau} />
  </Stack.Navigator>
);

export default AuthStack;
