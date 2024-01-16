import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/colors";
import CardShadow from "../Wrappers/CardShadow";
import { useDispatch } from "react-redux";
import { setProductsFilteredByCategory } from "../features/shop/shopSlice";

const CustomCategoryItem = ({ category, navigation, route }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setProductsFilteredByCategory(category));
    navigation.navigate("Category", { category });
  };

  return (
    <Pressable onPress={handlePress}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  );
};

export default CustomCategoryItem;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginHorizontal: "10%",
    backgroundColor: colors.blue, // Changed background color
    marginVertical: 10, // Changed to marginVertical for better spacing
    padding: 15, // Increased padding for better spacing
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15, // Increased border radius for a softer look
    borderWidth: 2,
  },
  text: {
    fontSize: 18, // Slightly increased font size
    color: colors.darkGray, // Changed text color
    fontFamily: "Roboto", // Changed font family
  },
});
