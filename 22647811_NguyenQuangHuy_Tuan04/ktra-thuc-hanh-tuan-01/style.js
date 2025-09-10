import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

export default   styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  buttonCss: {
    padding: 5,
    backgroundColor: '#000',
    marginHorizontal: 10,
    color: '#fff',
  },
});