import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setCategorySelected } from "../Features/Shop/shopSlice";
import Search from "../Components/Search";
import ProductItem from "../Components/ProductItem";

const ItemListCategories = ({ navigation, route }) => {
  const { category } = route.params;

  const products = useSelector(
    (state) => state.shopReducer.value.productsFilteredByCategory
  );

  const [keyword, setKeyword] = useState("");

  const [filteredProducts, setFilteredProducts] = useState(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategorySelected(category));
  }, [category, dispatch]);

  useEffect(() => {
    const filterProducts = () => {
      const filteredByName = products.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredProducts(filteredByName);
    };

    filterProducts();
  }, [products, keyword]);

  return (
    <>
      <Search setKeyword={setKeyword} />
      <FlatList
        style={styles.container}
        data={filteredProducts}
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
