import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProductDetail({ route }) {
  const { product } = route.params; // ✅ Nhận dữ liệu sản phẩm
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Hình ảnh */}
      <View style={styles.containerImg}>
        <Image style={styles.image} source={{ uri: product.image }} />
      </View>

      {/* Tên sản phẩm */}
      <Text style={styles.title}>{product.name}</Text>

      {/* Đánh giá */}
      <View style={styles.containerStar}>
        <View style={{ flexDirection: "row" }}>
          {Array.from({ length: product.star }).map((_, i) => (
            <Image
              key={i}
              style={{ width: 20, height: 20, marginRight: 2 }}
              source={require("../assets/star.png")}
            />
          ))}
        </View>
        <Text>({product.evaluate} đánh giá)</Text>
      </View>

      {/* Giá */}
      <View style={styles.priceRow}>
        <Text style={styles.priceFinal}>
          {(
            product.price -
            (product.price * product.discount) / 100
          ).toLocaleString("vi-VN")}{" "}
          đ
        </Text>
        <Text style={styles.priceOld}>
          {product.price.toLocaleString("vi-VN")} đ
        </Text>
      </View>

      {/* Thông điệp */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image
          style={{ width: 30, height: 20, resizeMode: "contain" }}
          source={require("../assets/abc.png")}
        />
      </View>

      {/* Chọn màu */}
      <TouchableOpacity
        style={styles.colorButton}
        onPress={() => navigation.navigate("SettingsScreen")}
      >
        <Text style={{ fontWeight: "700" }}>4 MÀU - CHỌN MÀU</Text>
        <Image
          style={styles.vectorIcon}
          source={require("../assets/Vector.png")}
        />
      </TouchableOpacity>

      {/* Nút chọn mua */}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerImg: {
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 10,
  },
  containerStar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 8,
    alignItems: "center",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  priceFinal: {
    fontSize: 16,
    fontWeight: "700",
    color: "red",
  },
  priceOld: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "#c0c0c0",
  },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 8,
  },
  bannerText: {
    marginHorizontal: 10,
    color: "red",
    fontWeight: "700",
    fontSize: 16,
  },
  colorButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    backgroundColor: "cyan",
    borderRadius: 6,
    paddingVertical: 12,
    position: "relative",
  },
  vectorIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    position: "absolute",
    right: 10,
  },
  buyButton: {
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: "red",
    borderRadius: 6,
    paddingVertical: 15,
  },
  buyText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});
