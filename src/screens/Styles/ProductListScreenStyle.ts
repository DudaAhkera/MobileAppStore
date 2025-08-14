import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  subcategoryContainer: {
    paddingTop: 30,
    height: 100,                
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  subcategoryContent: {
  alignItems: 'center',     
  justifyContent: 'center', 
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
    padding: 20,
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