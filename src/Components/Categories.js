import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";
import Counter from "./Counter";
import { useGetCategoriesQuery } from "../Store/shopServices";

const Categories = ({ navigation, route }) => {
  // const categories = useSelector((state) => state.shopReducer.value.categories);

  const { data, isLoading, error } = useGetCategoriesQuery();

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
        renderItem={renderItem}
        data={data}
        keyExtractor={(category) => category}
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
