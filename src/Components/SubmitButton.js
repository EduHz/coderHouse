import { StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../Global/colors";

const CustomSubmitButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default CustomSubmitButton;

const styles = StyleSheet.create({
  button: {
    width: "60%",
    backgroundColor: colors.blue, // Changed background color
    padding: 10,
    alignItems: "center", // Fixed typo in alignItems
    borderRadius: 10,
    alignSelf: "center", // Centered the button
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontFamily: "Roboto", // Changed font family
    fontWeight: "bold", // Added bold font weight
  },
});
