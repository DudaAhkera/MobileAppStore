import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigatorTypes';
import { Product } from '../types/product';
import { getProductById } from '../api/products';

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
        <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
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

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  inputId: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    textAlign: 'justify',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginBottom: 4,
  },
  priceContainer: {
  width: '100%',
  alignItems: 'center', // centraliza horizontalmente
  marginVertical: 20,   // espaço acima e abaixo
  },
  discount: {
    fontSize: 20,
    color: '#e76f51',
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#ff6f00',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 10,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: '#777',
  },
});


