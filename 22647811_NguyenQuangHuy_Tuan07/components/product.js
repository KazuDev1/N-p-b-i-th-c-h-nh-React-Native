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
      <Text style={styles.title}>The world’s Best Bike</Text>

      <View style={styles.filterContainer}>
        {arrFilter.map((item, index) => (
          <TouchableOpacity key={index}>
            <Text style={styles.filterItem}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetail')}
            style={styles.itemCard}
            >
            <Image
              style={styles.heartIcon}
              source={require('../assets/ant-design_heart-twotone.png')}
            />
            <Image
              style={styles.imgItem}
              source={require('../assets/bifour_-removebg-preview.png')}
            />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    color: '#E94141',
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  filterItem: {
    fontSize: 15,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E94245',
    color: '#E94141',
    marginHorizontal: 4,
    marginBottom: 10,
    textAlign: 'center',
  },
  itemCard: {
    flex: 1,
    minWidth: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    position: 'relative',
  },
  heartIcon: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 5,
    left: 5,
  },
  imgItem: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    color: 'gray',
  },
});
