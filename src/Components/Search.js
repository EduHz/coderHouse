// Search.js
import { StyleSheet, View, Pressable, TextInput, Text } from "react-native";
import { colors } from "../Global/colors";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useState } from "react";

const Search = ({ setKeyword }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const search = () => {
    const expression = /.*[0-9].*/;
    if (expression.test(input)) {
      setError("No debe contener números");
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
          onChangeText={(t) => setInput(t)}
        />
        <Pressable onPress={search}>
          <AntDesign name="search1" color={colors.black} size={25} />
        </Pressable>
        <Pressable onPress={removeItem}>
          <Entypo name="circle-with-cross" color={colors.black} size={25} />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorInput}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue2, // Cambiado a un tono de azul
    width: "100%",
  },
  containerInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    backgroundColor: colors.white, // Cambiado a blanco
    flex: 1,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
  },
  errorInput: {
    color: colors.red, // Cambiado a rojo
    paddingHorizontal: 10,
  },
});
