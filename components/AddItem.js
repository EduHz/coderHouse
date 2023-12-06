import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");

  const handleAddItem = () => {
    if (text.trim() !== "") {
      addItem(text);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add an item..."
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Add" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
  },
});

export default AddItem;
