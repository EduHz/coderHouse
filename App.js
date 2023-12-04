import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const App = () => {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.inputAdd}>
        <TextInput style={styles.input} placeholder="Ingrese Item" />
        <Button title="Add" onPress={() => setTextItem(textItem)} />
      </View>
      <View style={styles.inputList}>
        <Text>texto 1</Text>
        <Button title="Delete" onPress={() => console.log("Botón Delete")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: "start-end",
    alignItems: "center",
  },
  inputAdd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: "100%",
  },
  inputList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
  },
  input: {
    flex: 1,
    marginRight: 10,
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default App;
