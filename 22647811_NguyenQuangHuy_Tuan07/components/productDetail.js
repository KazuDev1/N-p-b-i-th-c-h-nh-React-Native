import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function Home() {
    const navigation = useNavigation();
  const arrFilter = ['All', 'RoadBike', 'Moutain'];
  const data = [
    { id: 1, name: 'Pinarello', price: 100 },
    { id: 2, name: 'Pina Mountai', price: 200 },
    { id: 3, name: 'Pina Bike 1', price: 300 },
    { id: 4, name: 'Pinarello 2', price: 400 },
    { id: 5, name: 'Pinarello 3', price: 500 },
    { id: 6, name: 'Pinarello 4', price: 600 },
  ];

  return (
    <View style={styles.container}>
      {/*  <Text style={styles.title}>The world’s Best Bike</Text> */}

      <View style={styles.containerImg}>
        <Image
          style={styles.imgItem}
          source={require('../assets/bifour_-removebg-preview.png')}
        />
      </View>
      <View>
        <Text style={{ marginVertical: 6, fontWeight: 700, fontSize: 20 }}>
          Pina Mountain
        </Text>
        <Text
          style={{
            marginVertical: 6,
            fontWeight: 700,
            fontSize: 16,
            color: '#ccc',
            marginBottom: 20,
          }}>
          15% OFF I 350$ 449$
        </Text>
        <Text style={{ marginVertical: 6, fontWeight: 700, fontSize: 16 }}>
          Description
        </Text>
        <Text
          style={{
            marginVertical: 6,
            fontWeight: 700,
            fontSize: 16,
            color: '#d4d4d4',
            marginBottom: 20,
          }}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Image
          style={styles.heartIcon}
          source={require('../assets/ant-design_heart-twotone.png')}
        />
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          >
            <Text
              style={{
                fontSize: 20,
                paddingHorizontal: 70,
                marginLeft: 20,
                paddingVertical: 8,
                backgroundColor: '#E94141',
                borderRadius: 20,
                color: '#fff',
              }}>
              Add to card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  containerImg: {
    backgroundColor: '#E94141',
    borderRadius: 4,
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    width: 40,
    height: 40,
  },
  imgItem: {
    height: 250,
    width: 200,
    resizeMode: 'contain',
  },
});
