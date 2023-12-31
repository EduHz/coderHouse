import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import allProduct from "../Data/products.json";
import { colors } from "../Global/colors";

const ItemDetail = ({ route }) => {
  const { id } = route.params;
  const [product, setProduct] = useState({});
  const images = product.images || [];

  useEffect(() => {
    const productFound = allProduct.find((p) => p.id === id);
    setProduct(productFound);
  }, [id]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: images[2] }}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$ {product.price}</Text>
        <Pressable style={styles.buyNowButton}>
          <Text style={styles.buyNowButtonText}>Buy Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  textContainer: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
  priceContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  price: {
    fontSize: 28,
  },
  buyNowButton: {
    backgroundColor: colors.green1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buyNowButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
