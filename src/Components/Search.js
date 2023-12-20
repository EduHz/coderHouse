import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import { colors } from "../Global/colors";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const search = () => {
    if (/\d/.test(input)) {
      setError("No se permiten números en la búsqueda");
    } else {
      setError("");
      onSearch(input);
    }
  };

  const removeInput = () => {
    setInput("");
    setError("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Search product..."
      />
      <Pressable onPress={search}>
        <AntDesign name="search1" size={25} color="black" />
      </Pressable>
      <Pressable onPress={removeInput}>
        <Entypo name="circle-with-cross" size={25} color="black" />
      </Pressable>
      {error !== "" && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingTop: 10,
  },
  input: {
    color: "white",
    backgroundColor: colors.green3,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.lightGray,
    width: "80%",
    fontSize: 20,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
});
