import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/colors";
import CardShadow from "../Wrappers/CardShadow";
import Card from "./Card";

const CategoryItem = ({ category }) => {
  return (
    <Pressable onPress={() => console.log("Category pressed: " + category)}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 20,
  },
});
