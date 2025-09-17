import { StyleSheet, Text, View, Image } from 'react-native';

export default function ProductItem1({ item }) {
  // Tính giá giảm 50%
  const discountedPrice = (item.price * 0.5).toLocaleString('vi-VN');

  return (
    <View style={styles.container}>
      {/* Ảnh sản phẩm */}
      <Image style={styles.imgItem} source={{ uri: item.img }} />

      {/* Thông tin sản phẩm */}
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>

        {/* Giá */}
        <Text style={styles.price}>{discountedPrice} đ</Text>

        {/* Đánh giá */}
        <View style={styles.ratingRow}>
          <Text style={styles.stars}>
            {'⭐'.repeat(item.star) + '☆'.repeat(5 - item.star)}
          </Text>
          <Text style={styles.comment}>({item.comment})</Text>
        </View>

        {/* Giảm giá */}
        <Text style={styles.discount}>-50%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 10,
  },
  imgItem: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    backgroundColor: '#f9f9f9',
  },
  info: {
    padding: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  stars: {
    fontSize: 14,
    color: '#f1c40f',
    marginRight: 5,
  },
  comment: {
    fontSize: 12,
    color: '#666',
  },
  discount: {
    fontSize: 12,
    color: 'red',
    fontWeight: '700',
  },
});
