import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import imgBook from "./assets/book.png"

export default function TikiCartScreen() {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState('');

  return (
    <View style={styles.container}>
      {/* Product Card */}
      <View style={styles.card}>
        <Image
          source={require('./assets/book.png')} 
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>Nguyên hàm, tích phân và ứng dụng</Text>
          <Text style={styles.productSubtitle}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>141.800 đ</Text>
          <Text style={styles.productOldPrice}>141.800 đ</Text>
          <View style={styles.quantityRow}>
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              <Text style={styles.quantityBtnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Text style={styles.quantityBtnText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.laterText}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Discount Code */}
      <View style={styles.discountContainer}>
        <Text style={styles.savedCodeText}>Mã giảm giá đã lưu <Text style={styles.linkText}>Xem tại đây</Text></Text>
        <View style={styles.discountRow}>
          <TextInput
            style={styles.discountInput}
            placeholder="Mã giảm giá"
            value={discountCode}
            onChangeText={setDiscountCode}
            placeholderTextColor="#000"
          />
          <TouchableOpacity style={styles.applyBtn}>
            <Text style={styles.applyBtnText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Gift Card */}
      <View style={styles.giftRow}>
        <Text style={styles.giftText}>
          Bạn có phiếu quà tặng Tiki/Got It/ Urbox?{' '}
          <Text style={styles.linkText}>Nhập tại đây?</Text>
        </Text>
      </View>

      <View style={styles.divider} />

      {/* Subtotal */}
      <View style={styles.row}>
        <Text style={styles.subtotalText}>Tạm tính</Text>
        <Text style={styles.priceText}>141.800 đ</Text>
      </View>

      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Total */}
      <View style={styles.row}>
        <Text style={styles.totalText}>Thành tiền</Text>
        <Text style={styles.totalPriceText}>141.800 đ</Text>
      </View>

      {/* Order Button */}
      <TouchableOpacity style={styles.orderBtn}>
        <Text style={styles.orderBtnText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  productImage: {
    width: 80,
    height: 100,
    borderRadius: 6,
    zIndex: 100,
  },
  productInfo: {
    marginLeft: 12,
    flex: 1,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2,
  },
  productSubtitle: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    color: '#E53935',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  productOldPrice: {
    fontSize: 13,
    color: '#BDBDBD',
    textDecorationLine: 'line-through',
    marginBottom: 6,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  quantityBtn: {
    width: 28,
    height: 28,
    backgroundColor: '#F0F0F0',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  quantityBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    width: 32,
    textAlign: 'center',
  },
  laterText: {
    fontSize: 13,
    color: '#1565C0',
    marginLeft: 10,
  },
  discountContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  savedCodeText: {
    fontSize: 13,
    marginBottom: 4,
  },
  linkText: {
    color: '#1565C0',
    textDecorationLine: 'underline',
  },
  discountRow: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  discountInput: {
    flex: 1,
    backgroundColor: '#FFEB3B',
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 15,
    marginRight: 8,
    height: 40,
  },
  applyBtn: {
    backgroundColor: '#1565C0',
    borderRadius: 4,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  applyBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  divider: {
    height: 7,
    backgroundColor: '#BDBDBD',
    marginVertical: 6,
    borderRadius: 3,
  },
  giftRow: {
    marginBottom: 4,
    paddingHorizontal: 2,
  },
  giftText: {
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    alignItems: 'center',
    marginBottom: 4,
  },
  subtotalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceText: {
    color: '#E53935',
    fontSize: 16,
    fontWeight: 'bold',
  },
  spacer: {
    height: 40,
  },
  totalText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#757575',
  },
  totalPriceText: {
    color: '#E53935',
    fontSize: 17,
    fontWeight: 'bold',
  },
  orderBtn: {
    backgroundColor: '#E53935',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  orderBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});