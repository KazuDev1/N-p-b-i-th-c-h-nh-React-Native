import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductDetail from './components/ProductDetail';
import SettingsScreen from './components/SettingSrceen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SettingsScreen">
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
