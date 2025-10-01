import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
        }}>
        <Text style={{ fontSize: '20px', marginVertical: '20px' }}>
          A premium online store for sporter and their stylish choice
        </Text>
        <View
          style={{
            backgroundColor: '#E94141',
            borderRadius: 20,
            padding: 10,
            paddingVertical: 40,
          }}>
          <Image source={require('../assets/bifour_-removebg-preview.png')} />
        </View>
        <Text style={{ marginVertical: 30, fontSize: 20, fontWeight: 700 }}>
          POWER BIKE SHOP
        </Text>

        <TouchableOpacity
              onPress={() =>
        navigation.navigate('Product')
      }
        >
          <Text
            style={{
              fontSize: 20,
              paddingHorizontal: 30,
              paddingVertical: 15,
              backgroundColor: '#E94141',
              borderRadius:20,
              color:"#fff"
              ,marginTop:10
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  a: {},
});
