
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function SearchScreen() {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập từ khóa..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Button title="Search" onPress={() => {}} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontSize: 16,
  },
});
