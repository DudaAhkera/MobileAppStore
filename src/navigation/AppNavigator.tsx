import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ProductTabs from './Tabs';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { RootStackParamList } from './AppNavigatorTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} 
            options={{
                        title: 'Tela de Login',     
                        headerTitleAlign: 'center', 
                        headerBackVisible: false
                      }}
        />
        <Stack.Screen name="ProductTabs" component={ProductTabs} 
          options={{ 
            headerTitle: 'Lista de Produtos',
            headerTitleAlign: 'center',
          }}
        /> 
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} 
          options={{ 
            headerTitle: 'Detalhes do Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

