import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Taotaikhoan = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(''); // State để lưu thông báo tạo tài khoản

  const handleSignup = () => {
    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (password === confirmPassword) {
      setMessage('Account created successfully!'); // Tạo tài khoản thành công
    } else {
      setMessage('Passwords do not match. Please try again.'); // Mật khẩu không khớp
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/logofirebase.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Create a new account!</Text>

      <TextInput
        placeholder="Enter email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Enter password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="Confirm password"
        secureTextEntry
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      {/* Hiển thị thông báo */}
      {message !== '' && <Text style={styles.message}>{message}</Text>}

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: 'white'  // Thêm màu nền trắng cho View
  },
  title: { 
    fontSize: 24, 
    textAlign: 'center', 
    marginBottom: 20 
  },
  input: { 
    borderWidth: 1, 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 10 
  },
  button: { 
    backgroundColor: 'orange', 
    padding: 15, 
    borderRadius: 8, 
    marginTop: 10 
  },
  buttonText: { 
    textAlign: 'center', 
    color: 'white', 
    fontWeight: 'bold' 
  },
  link: { 
    color: 'blue', 
    marginTop: 10, 
    textAlign: 'center' 
  },
  image: { 
    width: 150, // Kích thước hình ảnh
    height: 150, 
    alignSelf: 'center', // Căn giữa hình ảnh
    marginBottom: 20 
  },
  message: {
    marginTop: 10,
    color: 'green',  // Màu thông báo thành công
    textAlign: 'center',
  },
});

export default Taotaikhoan;
