import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useState, useEffect } from 'react';
import ProductItem1 from './productItem1';

export default function Bai2() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://6831430c6205ab0d6c3bbc11.mockapi.io/huy22647811/products1')
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []); // sửa ở đây: chỉ fetch 1 lần

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.back}>{'<'}</Text>
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <TextInput placeholder="Dây cáp usb" style={styles.searchInput} />
        </View>

        <TouchableOpacity>
          <Text style={styles.cart}>🛒</Text>
        </TouchableOpacity>
      </View>

      {/* Product list */}
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        numColumns={2} // hiển thị 2 cột
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
            <ProductItem1 item={item} />
          </View>
        )}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>≡</Text>
        <Text style={styles.footerIcon}>🏠</Text>
        <Text style={styles.footerIcon}>⬜</Text>
      </View>
    </SafeAreaView>
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
  searchBox: {
    flex: 1,
    marginHorizontal: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 35,
  },
  cart: { fontSize: 20, color: '#fff' },

  itemWrapper: {
    width: '48%', // thay vì flex:1
    margin: '1%', // tạo khoảng cách
    backgroundColor: '#fff',
    borderRadius: 6,
    overflow: 'hidden',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00bfff',
    padding: 10,
  },
  footerIcon: { fontSize: 20, color: '#fff' },
});
