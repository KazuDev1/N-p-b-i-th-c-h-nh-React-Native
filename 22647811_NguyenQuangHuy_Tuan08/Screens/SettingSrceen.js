import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function SettingsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: '100px',
          paddingVertical: 10,
          paddingHorizontal: 10,
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Image
          style={{ width: '50px', height: '60px', resizeMode: 'contain' }}
          source={require('../assets/vsblack.png')}
        />
        <Text style={{ fontSize: 16, fontWeight: 700, marginHorizontal: 10 }}>
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>

      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Text style={styles.title}>Chọn một màu bên dưới:</Text>

        <View style={styles.colorList}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetail', {
                image: require('../assets/vsblue.png'),
              })
            }>
            <View style={[styles.colorBox, { backgroundColor: '#ADE8F4' }]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetail', {
                image: require('../assets/vsred.png'),
              })
            }
            >
            <View style={[styles.colorBox, { backgroundColor: 'red' }]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetail', {
                image: require('../assets/vsblack.png'),
              })
            }>
            <View style={[styles.colorBox, { backgroundColor: 'black' }]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetail', {
                image: require('../assets/vssilver.png'),
              })
            }>
            <View style={[styles.colorBox, { backgroundColor: '#1D4ED8' }]} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => navigation.navigate('ProductDetail')}>
          <Text style={styles.doneButtonText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ccc' },
  title: { fontSize: 18, marginBottom: 20, fontWeight: 'bold' },
  colorList: { alignItems: 'center' },
  colorBox: {
    width: 80,
    height: 80,
    marginVertical: 10,
    borderRadius: 6,
    elevation: 2,
  },
  doneButton: {
    marginTop: 30,
    backgroundColor: '#4169E1',
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
