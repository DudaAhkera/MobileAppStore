import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Container da tab bar
  tabBar: {
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 4,
  },

  // Cada item/tab (opcional para margens, padding)
  tabBarItem: {
    paddingVertical: 4,
  },

  // Label abaixo do ícone
  tabLabel: {
    fontSize: 12,
    marginTop: 2,
    fontFamily: 'System',
  },

  // Botão custom
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    borderRadius: 8,
    paddingVertical: 6,
  },

  // Estilo ativo para o botão (fundo ou borda)
  tabButtonActive: {
    backgroundColor: '#ffe0b2',
  },
});