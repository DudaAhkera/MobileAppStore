import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListScreen from '../screens/ProductListScreen';
import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles}  from './TabsStyle'

const Tab = createBottomTabNavigator();

export default function ProductTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        // Estilização da barra
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,

        // Cores de texto e ícone
        tabBarActiveTintColor: '#ff6f00',
        tabBarInactiveTintColor: '#888',

        // Label estilizado
        tabBarLabelStyle: styles.tabLabel,

        // Substitui o botão padrão por um Pressable customizado
        tabBarButton: ({ accessibilityState, onPress, children }) => {
          const focused = accessibilityState?.selected;
          return (
            <Pressable
              onPress={onPress}
              style={[
                styles.tabButton,
                focused && styles.tabButtonActive
              ]}
            >
              {children}
            </Pressable>
          );
        },

        // Ícone de cada tab
        tabBarIcon: ({ color, size }) => {
          let iconName: React.ComponentProps<typeof MaterialIcons>['name'];
          if (route.name === 'Masculino') iconName = 'man';
          else iconName = 'woman';
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Masculino"
        children={() => <ProductListScreen categoryGroup="masculino" />}
      />
      <Tab.Screen
        name="Feminino"
        children={() => <ProductListScreen categoryGroup="feminino" />}
      />
    </Tab.Navigator>
  );
}



