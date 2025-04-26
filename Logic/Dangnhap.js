import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Dangnhap({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState(''); 


  const exampleEmail = '2124802010556@student.tdmu.edu.vn';
  const examplePassword = 'anhthuw1412@';

  const handleLogin = () => {
    if (email === exampleEmail && password === examplePassword) {
      setLoginMessage('Đăng nhập thành công!'); 
    } else {
      setLoginMessage('Đăng nhập thất bại !! vui lòng thử lại!!!'); 
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/logofirebase.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome back!</Text>

      <TextInput
        placeholder="Enter email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      {email === '' && <Text style={styles.error}>Email is a required field</Text>}

      <TextInput
        placeholder="Enter password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      {password === '' && <Text style={styles.error}>Password is a required field</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Hiển thị thông báo đăng nhập */}
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
    padding: 20, 
    backgroundColor: 'white'  
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
    marginBottom: 5 
  },
  error: { 
    color: 'red', 
    marginBottom: 5 
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
  linkButton: {
    alignItems: 'center',
    marginTop: 10, 
  },
  image: { 
    width: 150,  
    height: 150, 
    alignSelf: 'center',  
    marginBottom: 20 
  },
  message: {
    marginTop: 10,
    color: 'green',  
    textAlign: 'center',
  },
});
