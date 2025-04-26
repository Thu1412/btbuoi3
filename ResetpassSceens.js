import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ResetpassSceens = ({ navigation }) => {
  const [email, setEmail] = useState(''); 

  

  return (
    <View style={styles.container}>
      <Image
        source={require("./logo.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Khôi phục mật khẩu</Text>

      <TextInput
        placeholder="Nhập email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#888"
      />

      

      

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Quay lại trang đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

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

export default ResetpassSceens;
