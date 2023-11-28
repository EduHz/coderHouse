import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [inputVacio, setInputVacio] = useState("");
  const [listaItems, setListaItems] = useState([]);

  const handleInputChange = (text) => {
    setInputVacio(text);
  };

  const handleAddButtonPress = () => {
    if (inputVacio !== "") {
      setListaItems([...listaItems, inputVacio]);
      setInputVacio("");
    }
  };

  return (
    <View style={styles.firstView}>
      <View style={styles.container}>
        <TextInput
          style={styles.firstTextInput}
          placeholder="enter service"
          value={inputVacio}
          onChangeText={handleInputChange}
        />
        <Button title="ADD" onPress={handleAddButtonPress} />
      </View>
      <View>
        {listaItems.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstView: {
    padding: 30,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  firstTextInput: {
    borderBottomColor: "black",
    width: 200,
    borderBottomWidth: 1,
  },
});
