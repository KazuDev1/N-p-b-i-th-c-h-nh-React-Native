import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import avatar from "../assets/avatar.png"

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={avatar}
        style={styles.avatar}
      />
      <Text style={styles.name}>Nguyễn Văn A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});
