import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "../Components/Header";
import Search from "../Components/Search";
import allProducts from "../Data/products.json";
import ProductItem from "../Components/ProductItem";
import { colors } from "../Global/colors";

const ItemListCategories = ({
  category,
  setCategorySelected,
  setProductDetailId,
}) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = allProducts.filter((product) => {
      if (category && product.category !== category) {
        return false;
      }
      if (!product.title.includes(searchKeyword)) {
        return false;
      }
      return true;
    });

    setProducts(filteredProducts);
  }, [category, searchKeyword]);

  const handleGoBack = () => {
    setCategorySelected("");
  };

  return (
    <>
      <Header />
      <Search setKeyword={setSearchKeyword} />
      <Pressable style={styles.goBack} onPress={handleGoBack}>
        <Text>Volver</Text>
      </Pressable>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem item={item} setProductDetailId={setProductDetailId} />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  goBack: {
    width: "100%",
    backgroundColor: colors.green1,
    padding: 10,
    paddingStart: 40,
  },
});

export default ItemListCategories;
