import React, { useState } from "react";
import { StyleSheet, View, Pressable, TextInput, Text } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { colors } from "../Global/colors";

const Search = ({ setKeyword }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const search = () => {
    const expression = /.*[0-9].*/;
    if (expression.test(input)) {
      setError("El campo no debe contener números");
    } else {
      setKeyword(input);
    }
  };

  const removeItem = () => {
    setInput("");
    setError("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Buscar producto"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <Pressable onPress={search}>
          <AntDesign name="search1" color="black" size={25} />
        </Pressable>
        <Pressable onPress={removeItem}>
          <Entypo name="circle-with-cross" color="black" size={25} />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green1,
    width: "100%",
  },
  containerInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    backgroundColor: colors.green2,
    width: "75%",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
  },
  errorText: {
    color: "red",
    paddingHorizontal: 10,
  },
});

export default Search;
