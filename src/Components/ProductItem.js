import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../Global/colors";

const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.thumbnail }}
      />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: colors.blue2,
    marginHorizontal: "5%",
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  text: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
  },
});
