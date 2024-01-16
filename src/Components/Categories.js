import { FlatList, StyleSheet, View } from "react-native"; // Added View for better styling
import CategoryItem from "./CategoryItem";
import { useGetCategoriesQuery } from "../app/services/shopServices";
import { colors } from "../Global/colors"; // Imported colors from a common file

export default function CustomCategories({ navigation, route }) {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryItem category={item} navigation={navigation} route={route} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Added flex for better responsiveness
    width: "100%",
    backgroundColor: colors.lightGray, // Added background color
    padding: 10, // Added padding for better spacing
  },
  flatList: {
    width: "100%",
  },
});
