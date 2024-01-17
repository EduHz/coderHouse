import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../Global/colors";

export default function AddButton({ title, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green3, // Corrected typo: backGroundColor to backgroundColor
    width: "70%",
    paddingVertical: 8,
    margin: 10,
  },
  text: {
    color: "white",
    textAlign: "center", // Corrected typo: textAling to textAlign
    fontSize: 18,
  },
});
