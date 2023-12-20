import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";

const ProductItem = ({ item, setProductDetailId }) => {
  return (
    <Pressable style={styles.card} onPress={() => setProductDetailId(item.id)}>
      <Text style={styles.text}>{item.title}</Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.images[0] }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
});

export default ProductItem;
