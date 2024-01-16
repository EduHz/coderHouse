import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/colors";

const CustomHeader = ({ title = "Producto" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue, // Changed background color
    width: "100%",
    height: 100, // Increased height for better visibility
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2, // Added border to the bottom for a separation line
    borderBottomColor: colors.darkGray, // Added border color
  },
  text: {
    fontSize: 24, // Increased font size
    color: colors.darkGray, // Changed text color
    fontFamily: "Roboto", // Changed font family
    fontWeight: "bold", // Added bold font weight
  },
});
