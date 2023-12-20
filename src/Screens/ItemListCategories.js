import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Search from "../Components/Search";
import allProducts from "../Data/products.json";
import ProductItem from "../Components/ProductItem";

const ItemListCategories = ({ navigation, route }) => {
  const { category } = route.params;
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    const filterProducts = () => {
      const filteredByCategory = category
        ? allProducts.filter((product) => product.category === category)
        : allProducts;

      const filteredByName = filteredByCategory.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );

      setProducts(filteredByName);
    };

    filterProducts();
  }, [category, keyword]);

  return (
    <>
      <Search setKeyword={setKeyword} />
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem item={item} navigation={navigation} route={route} />
        )}
      />
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
