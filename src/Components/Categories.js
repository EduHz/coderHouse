import { FlatList, StyleSheet, Text, View } from "react-native";
import categories from "../Data/categories.json";
import CategoryItem from "./CategoryItem";

const Categories = ({ setCategorySelected }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            setCategorySelected={setCategorySelected}
          />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
