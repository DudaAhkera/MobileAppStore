import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 10, borderBottomWidth: 1 },
  image: { width: 80, height: 80 },
  info: { marginLeft: 10, justifyContent: 'center' },
  name: { fontWeight: 'bold' }
});

