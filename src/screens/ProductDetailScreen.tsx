import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigatorTypes';
import { Product } from '../types/product';
import { getProductById } from '../api/products';
import { styles } from './Styles/ProductDetailScreenStyle';

 type ProductDetailNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetailScreen'>;

export default function ProductDetailScreen() {
  const [product, setProduct] = useState<Product | null>(null);
  const [newId, setNewId] = useState('');
  const route = useRoute();
  const navigation = useNavigation<ProductDetailNavigationProp>();
  const { id } = route.params as { id: number };

   useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error: any) {
        Alert.alert('Erro', error.message);
      }
    };
      fetchDetails();
    }, [id]);

  if (!product) return <Text style={styles.loadingText}>Carregando...</Text>;

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, padding: 20 }}
    >
      <View style={{ flex: 1 }}>
        {/* Barra de navegação por ID */}
        <View style={styles.navBar}>
          <TextInput
            placeholder="Digite o ID"
            keyboardType="numeric"
            value={newId}
            onChangeText={setNewId}
            style={styles.inputId}
          />
          <Button
            title="Ir"
            onPress={() => {
              if (newId.trim()) {
                navigation.replace('ProductDetailScreen', { id: Number(newId) });
                setNewId('');
              } else {
                Alert.alert('Atenção', 'Digite um ID válido');
              }
            }}
          />
        </View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
          </View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>Preço: R$ {product.price}</Text>
          <Text style={styles.discount}>Desconto: {product.discountPercentage}%</Text>
            <View style={styles.buyButton}>
              <TouchableOpacity
                style={styles.buyButton}
                onPress={() => alert('Compra realizada!')}
                activeOpacity={0.8}
              >
                <Text style={styles.detailsButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{ marginTop: 'auto' }}>
          <Button title="Logout" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </ScrollView>
  );
}




