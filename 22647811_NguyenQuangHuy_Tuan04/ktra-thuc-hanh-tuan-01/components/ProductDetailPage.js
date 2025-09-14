import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const basePrice = 141800;
  const totalPrice = basePrice * quantity;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + ' đ';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Tiki_Ok</Text>
        </View>

        {/* Product Image Section */}
        <View style={styles.productImageSection}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>

        {/* Price Section */}
        <View style={styles.priceSection}>
          <Text style={styles.price}>{formatPrice(basePrice)}</Text>
          <Text style={styles.originalPrice}>Giá gốc: {formatPrice(basePrice)}</Text>
        </View>

        {/* Quantity Selector */}
        <View style={styles.quantitySection}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={decreaseQuantity}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={increaseQuantity}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Coupon Section */}
        <View style={styles.couponSection}>
          <TouchableOpacity style={styles.couponButton}>
            <Text style={styles.couponButtonText}>Mã giảm giá</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>

        {/* Gift/Reward Notification */}
        <View style={styles.notificationSection}>
          <Text style={styles.notificationText}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <TouchableOpacity>
            <Text style={styles.notificationLink}>Nhập tại đây?</Text>
          </TouchableOpacity>
        </View>

        {/* Subtotal Section */}
        <View style={styles.subtotalSection}>
          <View style={styles.subtotalRow}>
            <Text style={styles.subtotalLabel}>Tạm tính</Text>
            <Text style={styles.subtotalPrice}>{formatPrice(totalPrice)}</Text>
          </View>
        </View>

        {/* Total Section */}
        <View style={styles.totalSection}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Thành tiền</Text>
            <Text style={styles.totalPrice}>{formatPrice(totalPrice)}</Text>
          </View>
        </View>

        {/* Checkout Button */}
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#1BA9FF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productImageSection: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
  },
  priceSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ee0d24',
    marginBottom: 5,
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  quantitySection: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: '#C4C4C4',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 20,
    minWidth: 30,
    textAlign: 'center',
  },
  couponSection: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
  },
  couponButton: {
    flex: 1,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  couponButtonText: {
    fontSize: 14,
    color: '#333',
  },
  applyButton: {
    backgroundColor: '#0A68FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  notificationSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  notificationLink: {
    fontSize: 14,
    color: '#134FEC',
    textDecorationLine: 'underline',
  },
  subtotalSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 2,
  },
  subtotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtotalLabel: {
    fontSize: 16,
    color: '#333',
  },
  subtotalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ee0d24',
  },
  totalSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ee0d24',
  },
  checkoutButton: {
    backgroundColor: '#ee0d24',
    marginHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});