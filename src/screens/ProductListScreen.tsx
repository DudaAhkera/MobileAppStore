import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, Alert, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigatorTypes';
import { Product } from '../types/product';
import { getProductsByCategory } from '../api/products';


const subcategories = {
  masculino: [
    { key: 'mens-shirts', label: 'Camisas' },
    { key: 'mens-shoes', label: 'Sapatos' },
    { key: 'mens-watches', label: 'Relógios' },
  ],
  feminino: [
    { key: 'womens-bags', label: 'Bolsas' },
    { key: 'womens-dresses', label: 'Vestidos' },
    { key: 'womens-jewellery', label: 'Joias' },
    { key: 'womens-shoes', label: 'Sapatos' },
    { key: 'womens-watches', label: 'Relógios' },
  ],
};

const categories = {
  masculino: ['mens-shirts', 'mens-shoes', 'mens-watches'],
  feminino: ['womens-bags', 'womens-dresses', 'womens-jewellery', 'womens-shoes', 'womens-watches'],
};

type ProductListNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductTabs'>;

export default function ProductListScreen({ categoryGroup }: { categoryGroup: 'masculino' | 'feminino' }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    subcategories[categoryGroup][0].key
  );
  const navigation = useNavigation<ProductListNavigationProp>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsByCategory(selectedSubcategory);
        setProducts(products);
      } catch (error: any) {
        Alert.alert('Erro', error.message);
      }
    };
    fetchProducts();
  }, [selectedSubcategory]);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </Pressable>
      {/* Subcategorias */}
      <View style={styles.subcategoryContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.subcategoryScroll}
        >
          {subcategories[categoryGroup].map((subcat) => (
            <TouchableOpacity
              key={subcat.key}
              style={[
                styles.subcategoryButton,
                selectedSubcategory === subcat.key && styles.subcategoryButtonActive,
              ]}
              onPress={() => setSelectedSubcategory(subcat.key)}
            >
              <Text
                style={[
                  styles.subcategoryText,
                  selectedSubcategory === subcat.key && styles.subcategoryTextActive,
                ]}
              >
                {subcat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/* Lista de Produtos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{ uri: item.thumbnail }} style={styles.productImage} />

            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>R$ {item.price}</Text>

              <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('ProductDetailScreen', { id: item.id })}>
                <Text style={styles.detailsButtonText}>Ver detalhes</Text>
              </TouchableOpacity>
            </View>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  backButton: {
    backgroundColor: '#0066cc',
    padding: 10,
    margin: 10,
    marginTop:50,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  backButtonText: { fontSize: 14, fontWeight: 'bold', color: 'white' },
  subcategoryContainer: {
    flex: 1,                // ocupa todo o espaço disponível
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center',     // centraliza horizontalmente
  },
  subcategoryContent: {
  alignItems: 'center',     // garante centralização vertical dos botões na rolagem
  justifyContent: 'center', // garante centralização horizontal
  },
  subcategoryScroll: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  subcategoryButton: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginTop:15,
    marginBottom: 5,
    marginRight: 8,
    minWidth: 70,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  subcategoryButtonActive: {
    backgroundColor: '#ff6f00',
  },
  subcategoryText: {
    color: '#555',
    fontSize: 14,
  },
  subcategoryTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },

  productCard: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  productImage: { width: 60, height: 60, borderRadius: 6 },
  productInfo: { flex: 1, marginLeft: 10 },
  productTitle: { fontSize: 16, fontWeight: 'bold' },
  productPrice: { marginTop: 4, fontSize: 14, color: '#666' },
  detailsButton: {
    marginTop: 6,
    backgroundColor: '#ff6f00',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  detailsButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});
