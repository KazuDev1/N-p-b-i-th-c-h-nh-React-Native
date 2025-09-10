import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useState, useRef } from 'react';
import styles from './style';

export default function App() {
  const [quantity, setQuantity] = useState(0);
  const inputA = useRef(null);
  const inputB = useRef(null);

  const deleteInput = () => {
  };

  const increase = () => {
    const a = parseInt(inputA.current.value);
    const b = parseInt(inputB.current.value);
    setQuantity(a + b);
  };

  const decrease = () => {
    const a = parseInt(inputA.current.value);
    const b = parseInt(inputB.current.value);
    setQuantity(a - b);
  };

  const multi = () => {
    const a = parseInt(inputA.current.value);
    const b = parseInt(inputB.current.value);
    setQuantity(a * b);
  };

  const divide = () => {
    const a = parseInt(inputA.current.value);
    const b = parseInt(inputB.current.value);
    setQuantity(a / b);
  };
  // const value= [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // {value.map((index,item) => (
  //   <TouchableOpacity
  //     onPress={increase}
  //     style={styles.buttonCss}
  //     onPress={increase}>
  //     <Text style={{ color: '#fff' }}>index</Text>
  //   </TouchableOpacity>
  // ))}

  return (
    <View style={styles.container}>
      <TextInput ref={inputA} style={styles.textInput} />
      <TextInput ref={inputB} style={styles.textInput} />

      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
        <TouchableOpacity onPress={increase} style={styles.buttonCss}>
          <Text style={{ color: '#fff' }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrease} style={styles.buttonCss}>
          <Text style={{ color: '#fff' }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={multi} style={styles.buttonCss}>
          <Text style={{ color: '#fff' }}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={divide} style={styles.buttonCss}>
          <Text style={{ color: '#fff' }}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={divide} style={styles.buttonCss} onPress={deleteInput}>
          <Text style={{ color: '#fff' }}>Xoa</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.textInput} value={quantity} />
    </View>
  );
}
