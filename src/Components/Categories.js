import React from "react";
import { FlatList, StyleSheet } from "react-native";
import categories from "../Data/categories.json";
import CategoryItem from "./CategoryItem";

const Categories = ({ setCategorySelected }) => {
  const renderCategoryItem = ({ item }) => (
    <CategoryItem setCategorySelected={setCategorySelected} category={item} />
  );

  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={(item, index) => `${item}_${index}`}
      renderItem={renderCategoryItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default Categories;
