import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../Global/colors";

const CustomOrderItem = ({ order }) => {
  const total = order.items.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>
          {new Date(order.createdAt).toLocaleString()}
        </Text>
        <Text style={styles.text2}>Total: $ {total.toFixed(2)}</Text>
      </View>
      <Feather name="search" size={25} color={colors.darkGray} />
    </View>
  );
};

export default CustomOrderItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue, // Changed background color
    margin: 15, // Increased margin for better spacing
    padding: 15, // Increased padding for better spacing
    height: 120, // Increased height for better visibility
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15, // Increased border radius for a softer look
    borderWidth: 2,
  },
  textContainer: {
    width: "70%",
    flexDirection: "column", // Changed to column for better alignment
    justifyContent: "space-between",
    marginLeft: 10, // Added margin for better spacing
  },
  text1: {
    fontSize: 18, // Slightly increased font size
    fontWeight: "bold", // Added bold font weight
    fontFamily: "Roboto", // Changed font family
    color: colors.darkGray, // Changed text color
  },
  text2: {
    fontSize: 16, // Slightly decreased font size
    fontFamily: "Roboto", // Changed font family
    color: colors.darkGray, // Changed text color
  },
});
