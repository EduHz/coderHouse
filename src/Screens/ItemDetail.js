import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import allProduct from "../Data/products.json";
import { colors } from "../Global/colors";

const ItemDetail = ({ productDetailId, setProductDetailId }) => {
  const [product, setProduct] = useState({});

  const { width, height } = useWindowDimensions();
  const [landscape, setLandscape] = useState(false);

  useEffect(() => {
    if (width > height) {
      setLandscape(true);
    } else {
      setLandscape(false);
    }
  }, [width, height]);

  useEffect(() => {
    const productFinded = allProduct.find(
      (product) => product.id === productDetailId
    );
    setProduct(productFinded);
  }, [productDetailId]);

  return (
    <View style={styles.container}>
      <Header />
      <Pressable
        style={styles.goBack}
        title="Go back"
        onPress={() => setProductDetailId(0)}
      >
        <Text>Volver</Text>
      </Pressable>
      <View style={landscape ? styles.contentLandscape : styles.content}>
        <Image
          style={landscape ? styles.imageLandscape : styles.image}
          source={{ uri: product.thumbnail }}
          resizeMode="cover"
        />
        <View
          style={
            landscape ? styles.containerTextLandscape : styles.containerText
          }
        >
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View
          style={
            landscape ? styles.containerPriceLandscape : styles.containerPrice
          }
        >
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
  },
  content: {
    width: "100%",
  },
  contentLandscape: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: 300,
  },
  imageLandscape: {
    width: 200,
    height: 200,
  },
  goBack: {
    width: "100%",
    backgroundColor: colors.green1,
    padding: 10,
    paddingStart: 40,
  },
  containerTextLandscape: {
    width: "30%",
    flexDirection: "column",
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25,
  },
  containerPriceLandscape: {
    width: "30%",
    flexDirection: "column",
  },
  containerPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 30,
  },
  buyNow: {
    backgroundColor: colors.green1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buyNowText: {
    color: "white",
  },
});
