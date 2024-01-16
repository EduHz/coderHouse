import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Changed icon library
import { colors } from "../Global/colors";

export default function CustomCartItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.quantityAndPrice}>
          Cantidad: {item.quantity} Precio $ {item.price}
        </Text>
      </View>
      <FontAwesome name="trash" size={25} color={colors.red} />{" "}
      {/* Changed trash icon color */}
    </View>
  );
}

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
  title: {
    fontSize: 20, // Slightly increased font size
    color: colors.darkGray, // Changed text color
    fontFamily: "Roboto", // Changed font family
    fontWeight: "bold", // Added bold font weight
  },
  brand: {
    fontSize: 18, // Slightly increased font size
    color: colors.darkGray, // Changed text color
    fontFamily: "Roboto", // Changed font family
  },
  quantityAndPrice: {
    fontSize: 16, // Slightly decreased font size
    color: colors.darkGray, // Changed text color
    fontFamily: "Roboto", // Changed font family
  },
});
