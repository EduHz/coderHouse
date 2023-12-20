import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../Global/colors";
import CardShadow from "../Wrappers/CardShadow";

const CategoryItem = ({ category, setCategorySelected }) => {
  const handlePress = () => {
    setCategorySelected(category);
  };

  return (
    <Pressable onPress={handlePress}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginHorizontal: "10%",
    backgroundColor: colors.green2,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    // Estilos de texto si es necesario
  },
});

export default CategoryItem;
