import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginSceens({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      setLoginMessage('Đăng nhập thành công!');
    } else {
      setLoginMessage('Vui lòng nhập đầy đủ Email và Mật khẩu!');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./logo.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Chào mừng bạn trở lại!</Text>

      <TextInput
        placeholder="Nhập email của bạn"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#888"
      />
      {email === '' && <Text style={styles.error}>Email không được để trống</Text>}

      <TextInput
        placeholder="Nhập mật khẩu"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#888"
      />
      {password === '' && <Text style={styles.error}>Mật khẩu không được để trống</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      {loginMessage !== '' && <Text style={styles.message}>{loginMessage}</Text>}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.linkButton}>
        <Text style={styles.link}>Create a new account?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')} style={styles.linkButton}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 24, 
    backgroundColor: '#F2F6FC' 
  },
  title: { 
    fontSize: 26, 
    textAlign: 'center', 
    marginBottom: 20, 
    fontWeight: 'bold', 
    color: '#1E3A8A'
  },
  link: { 
    color: 'blue', 
    marginTop: 10, 
    textAlign: 'center' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#CBD5E1', 
    borderRadius: 10, 
    padding: 12, 
    marginBottom: 8,
    backgroundColor: '#fff',
    color: '#1E293B',
  },
  error: { 
    color: 'red', 
    marginBottom: 8, 
    fontSize: 12,
  },
  button: { 
    backgroundColor: '#2563EB', 
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
  image: { 
    width: 120,  
    height: 120, 
    alignSelf: 'center',  
    marginBottom: 20 
  },
  message: {
    marginTop: 15,
    color: '#16A34A',  
    textAlign: 'center',
    fontWeight: '500',
  },
});
