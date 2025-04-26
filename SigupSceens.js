import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SigupSceens = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSignup = () => {
    if (password === confirmPassword && email.trim() !== '' && password.trim() !== '') {
      setMessage('Tạo tài khoản thành công!');
    } 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./logo.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Tạo tài khoản mới</Text>

      <TextInput
        placeholder="Nhập email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#888"
      />

      <TextInput
        placeholder="Nhập mật khẩu"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#888"
      />

      <TextInput
        placeholder="Xác nhận mật khẩu"
        secureTextEntry
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>

      {message !== '' && <Text style={styles.message}>{message}</Text>}

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 24, 
    backgroundColor: '#F1F5F9' // Xám nhạt
  },
  title: { 
    fontSize: 26, 
    textAlign: 'center', 
    marginBottom: 20, 
    fontWeight: 'bold', 
    color: '#1D4ED8' // Xanh đậm
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#CBD5E1', 
    borderRadius: 10, 
    padding: 12, 
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#1E293B', // Xanh xám đậm
  },
  button: { 
    backgroundColor: '#2563EB', // Xanh dương
    padding: 15, 
    borderRadius: 10, 
    marginTop: 10 
  },
  buttonText: { 
    textAlign: 'center', 
    color: 'white', 
    fontWeight: '600',
    fontSize: 16
  },
  link: { 
    color: '#1D4ED8', // Xanh dương
    marginTop: 12, 
    textAlign: 'center',
    fontSize: 14
  },
  image: { 
    width: 120, 
    height: 120, 
    alignSelf: 'center',
    marginBottom: 20 
  },
  message: {
    marginTop: 12,
    color: '#16A34A',  // Xanh lá cho success
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default SigupSceens;
