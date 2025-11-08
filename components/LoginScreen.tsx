import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';
import CustomInput from './CustomInput'; 

const LoginScreen = () => {
  console.log('>>> LoginScreen EKRANI YÜKLENDİ <<<'); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('E-posta:', email);
    console.log('Şifre:', password);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Giriş Yap</Text>

        <CustomInput
          placeholder="E-posta"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <CustomInput
          placeholder="Şifre"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button
          title="Giriş Yap"
          onPress={handleLogin}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default LoginScreen;