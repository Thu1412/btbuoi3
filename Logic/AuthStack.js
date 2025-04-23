import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dangnhap from '../Logic/Dangnhap';
import Taotaikhoan from '../Logic/Taotaikhoan';
import Laylaimatkhau from '../Logic/Laylaimatkhau';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Dangnhap} />
      <Stack.Screen name="Signup" component={Taotaikhoan} />
      <Stack.Screen name="ResetPassword" component={Laylaimatkhau} />
    </Stack.Navigator>
  );
}
