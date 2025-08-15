import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigatorTypes';
import { styles } from './Styles/LoginScreenStyle';

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
    navigation.navigate('Register'); 
  };

  return (
    <View style={styles.container}>
      {/*Logo*/}
      <Image
        source={require('../../assets/online-shopping.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* Nome do App*/}
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
        <TouchableOpacity 
          onPress={() => {
            Alert.alert(
              'Cadastro realizado com sucesso',
              'Boas compras!'
            );
      }} style={styles.registerButton}>
          <Text style={styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      </Pressable>

    </View>
  );
}

