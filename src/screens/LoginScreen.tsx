import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigatorTypes';
import { Product } from '../types/product';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const [email, setEmail] = useState('rochapereira16@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const navigation = useNavigation<NavigationProp>();


  const handleLogin = () => {
    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    }
    setError('');
    navigation.navigate('ProductTabs');
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // ajuste o nome da rota caso seja diferente
  };

  return (
    <View style={styles.container}>
      {/*Logo*/}
      <Image
        source={require('../../assets/online-shopping.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* Título no lugar de "Login" */}
      <Text style={styles.title}>MobileOnlineApp</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" autoCapitalize="none" />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {/* Botões de ação */}
      <Pressable
        onPress={handleLogin}
        style={({ pressed }) => [
          styles.button,
          {
            opacity: pressed ? 0.7 : 1,
            transform: [{ scale: pressed ? 0.97 : 1 }],
          },
        ]}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
      <Pressable>
        <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
          <Text style={styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 8,
    borderRadius: 4,
  },

  error: {
    color: 'red',
    marginBottom: 12,
  },

  buttonGroup: {
    marginTop: 16,
  },

  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  registerButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#0066cc',
  },

  registerText: {
    color: '#0066cc',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
