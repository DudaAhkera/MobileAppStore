import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigatorTypes';
import { Product } from '../types/product';
import { getProductsByCategory } from '../api/products';
import { styles } from './Styles/ProductListScreenStyle';


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
        style={{ flex: 1 }}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={true}
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


