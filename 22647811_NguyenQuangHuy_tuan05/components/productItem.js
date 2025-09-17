import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App({ item }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgItem} source={{ uri: item.img }} />
      <View style={styles.containerText}>
        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.shopName}>{item.shopName}</Text>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.textChat}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    width: '100%',
    height: 85, // bỏ 'px'
  },
  imgItem: {
    height: '100%',
    width: 60, // bỏ 'px'
    resizeMode: 'contain',
  },
  containerText: {
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '700', // sửa thành chuỗi
    color: 'blue',
    flexShrink: 1,
  },
  shopName: {
    fontSize: 16,
    fontWeight: '500', // sửa thành chuỗi
    color: 'red',
    marginTop: 5,
  },
  chatButton: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  textChat: {
    color: '#fff',
    fontWeight: '600', // sửa thành chuỗi
  },
});
