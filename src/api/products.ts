import axios from 'axios';
import { Product } from '../types/product';

const BASE_URL = 'https://dummyjson.com';

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`);
    return response.data.products;
  } catch (error: any) {
    console.error(`Erro ao buscar produtos da categoria ${category}:`, error.message);
    throw new Error('Não foi possível carregar os produtos. Tente novamente mais tarde.');
  }
};

export const getProductById = async (id: number): Promise<Product> => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error: any) {
    console.error(`Erro ao buscar produto com ID ${id}:`, error.message);
    throw new Error('Não foi possível carregar os detalhes do produto.');
  }
};

