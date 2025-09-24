import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function ProductDetail() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={styles.image}
          source={require('../assets/vs_silver.png')}
        />
      </View>
      <View>
        <Text style={{ fontSize: 14, fontWeight: 700, textAlign: 'center' }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={styles.containerStar}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          {Array.from({ length: 5 }).map((item) => (
            <Image style={{}} source={require('../assets/star.png')} />
          ))}
        </View>
        <View>
          <Text>(Xem 828 đánh giá)</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 10,
        }}>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>1.790.000 đ</Text>
        <Text
          style={{
            fontSize: 16,
            textDecorationLine: 'line-through',
            color: '#c0c0c0',
          }}>
          1.790.000 đ
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 8,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginHorizontal: 10,
            color: 'red',
            fontWeight: 700,
            fontSize: 16,
          }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          style={{ width: 30, height: 20, resizeMode: 'contain' }}
          source={require('../assets/abc.png')}
        />
      </View>
      <View
        style={{ paddingHorizontal: 10, marginTop: 15, marginVertical: 10, right: 0 }}>
        <TouchableOpacity
          style={{
            textAlign: 'center',
            color: '#000',
            backgroundColor: 'cyan',
            borderRadius: 6,
            paddingVertical: 10,
            fontWeight: 700,
            position:"relative",
          }}
          onPress={() => navigation.navigate('SettingsScreen')}
          >
          
          <Image
            style={{ width: 30, height: 20, resizeMode: 'contain', position: "absolute" }}
            source={require('../assets/abc.png')}
          />
          4 MÀU-CHỌN MÀU
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{ paddingTop: 30, paddingHorizontal: 10, marginVertical: 10 }}>
          <TouchableOpacity
            style={{
              textAlign: 'center',
              color: '#fff',
              backgroundColor: 'red',
              borderRadius: 6,
              paddingVertical: 10,
              fontWeight: 700,
              fontSize: 20,
            }}
            >
            CHỌN MUA
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    top: 0,
  },
  containerImg: {
    padding: 10,
  },
  containerStar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 8,
  },

  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});
