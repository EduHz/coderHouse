import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { colors } from "../Global/colors";

const ProductItem = ({ item, setProductDetailId }) => {
  const { width } = useWindowDimensions();

  return (
    <Pressable
      style={styles.container}
      onPress={() => setProductDetailId(item.id)}
    >
      <Text style={width > 350 ? styles.text : styles.textMin}>
        {item.title}
      </Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.thumbnail }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 100,
    backgroundColor: colors.green1,
    marginHorizontal: "10%",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    width: "60%",
    textAlign: "center",
    fontSize: 20,
  },
  textMin: {
    width: "60%",
    textAlign: "center",
    fontSize: 15,
  },
  image: {
    height: 90,
    width: "30%",
  },
});

export default ProductItem;
