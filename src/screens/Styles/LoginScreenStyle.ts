import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 8,
    borderRadius: 4,
  },

  error: {
    color: 'red',
    marginBottom: 12,
  },

  buttonGroup: {
    marginTop: 50,
  },

  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  registerButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#0066cc',
  },

  registerText: {
    color: '#0066cc',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
