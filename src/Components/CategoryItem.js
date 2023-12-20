import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/colors";
import CardShadow from "../Wrappers/CardShadow";

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("Category", { category })}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginHorizontal: "10%",
    backgroundColor: colors.blue1,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 10,
  },
});