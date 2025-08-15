import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import  { styles } from './ProductCardStyles'

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type Props = {
  product: Product;
  onPress: () => void;
};

export default function ProductCard({ product, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.title}</Text>
        <Text>R$ {product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}



