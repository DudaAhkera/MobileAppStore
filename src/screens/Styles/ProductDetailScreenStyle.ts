import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  imageContainer: {
  width: '100%',
  paddingVertical: 10,  // espaço extra acima e abaixo
  },
  productImage: {
    width: '100%',
    height: 320,
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