import React from "react";
import { FlatList, StyleSheet } from "react-native";
import categories from "../Data/categories.json";
import CategoryItem from "./CategoryItem";
import Counter from "./Counter";

const Categories = ({ navigation, route }) => {
  const renderItem = ({ item }) => {
    return (
      <CategoryItem category={item} navigation={navigation} route={route} />
    );
  };

  return (
    <>
      <Counter />
      <FlatList
        style={styles.container}
        data={categories}
        renderItem={renderItem}
      />
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
