import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import ProductItem from './productItem';

export default function Bai1() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://6831430c6205ab0d6c3bbc11.mockapi.io/huy22647811/products')
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [product]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.back}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Chat</Text>
          <TouchableOpacity>
            <Text style={styles.cart}>🛒</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={product}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductItem item={item} />}></FlatList>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerIcon}>≡</Text>
          <Text style={styles.footerIcon}>🏠</Text>
          <Text style={styles.footerIcon}>⬜</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  back: { fontSize: 20, color: '#fff' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  cart: { fontSize: 20, color: '#fff' },

    footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#00bfff",
    padding: 10
  },
  footerIcon: { fontSize: 20, color: "#fff" }
});
