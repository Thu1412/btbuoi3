import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Laylaimatkhau = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State để điều khiển hiển thị mật khẩu

  const handleSendResetEmail = () => {
    // Kiểm tra email hợp lệ (Ví dụ đơn giản: kiểm tra nếu email không rỗng)
    if (email !== '') {
      setPassword('Your new temporary password is: 123456');  // Gán mật khẩu tạm thời
      setShowPassword(true);  // Hiển thị mật khẩu
    } else {
      setPassword('Please enter a valid email.');
      setShowPassword(true);  // Hiển thị thông báo lỗi
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/logofirebase.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Reset your password</Text>

      <TextInput
        placeholder="Enter email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleSendResetEmail}>
        <Text style={styles.buttonText}>Send Reset Email</Text>
      </TouchableOpacity>

      {/* Hiển thị mật khẩu hoặc thông báo lỗi */}
      {showPassword && <Text style={styles.password}>{password}</Text>}

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Go back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',  // Căn giữa toàn bộ nội dung trong container
    backgroundColor: 'white',  // Màu nền trắng
    padding: 20 
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
    marginBottom: 10, 
    width: '100%'  // Đảm bảo TextInput chiếm đủ không gian
  },
  button: { 
    backgroundColor: 'orange', 
    padding: 15, 
    borderRadius: 8, 
    marginTop: 10, 
    width: '100%'  // Đảm bảo nút có chiều rộng đầy đủ
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
    width: 150, 
    height: 150, 
    marginBottom: 20  // Đảm bảo hình ảnh có khoảng cách với các phần tử khác
  },
  password: {
    marginTop: 10,
    color: 'green',  // Màu của mật khẩu hiển thị (hoặc thông báo lỗi)
    textAlign: 'center',
  }
});

export default Laylaimatkhau;
