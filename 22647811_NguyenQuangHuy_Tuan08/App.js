import * as React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

// Home Screen
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Home Screen!</Text>
    </View>
  );
}

// Profile Screen
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>User Name: John Doe</Text>
      <Text>Email: john@example.com</Text>
    </View>
  );
}

// Settings Screen
function SettingsScreen() {
  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text>Enable Notifications</Text>
      <Switch
        value={isEnabled}
        onValueChange={() => setIsEnabled(!isEnabled)}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
