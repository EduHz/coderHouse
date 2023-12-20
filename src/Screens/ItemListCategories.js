import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import allProducts from "../Data/products.json";
import Cabezera from "../Components/Cabezera";
import Search from "../Components/Search";
import ProductItem from "../Components/ProductItem";

const ItemListCategories = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    let filteredProducts = allProducts;

    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    filteredProducts = filteredProducts.filter((product) =>
      product.title.includes(keyword)
    );
    setProducts(filteredProducts);
  }, [category, keyword]);

  return (
    <View>
      <Cabezera title={category ?? "Products"} />
      <Search onSearch={setKeyword} />
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemListCategories;
