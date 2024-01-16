import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../Global/colors";

const CustomInputForm = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={isSecure}
      />
      {error ? (
        <View>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default CustomInputForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  input: {
    width: "90%",
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: colors.blue, // Changed border color
    padding: 5, // Increased padding for better spacing
    fontFamily: "Roboto", // Changed font family
    fontSize: 16, // Increased font size
    marginHorizontal: "5%",
    marginVertical: 10,
  },
  titleInput: {
    width: "90%",
    marginHorizontal: "5%",
    fontSize: 18, // Increased font size
    fontFamily: "Roboto", // Changed font family
  },
  error: {
    fontSize: 16,
    color: "red",
    fontFamily: "Roboto", // Changed font family
    fontStyle: "italic",
    marginLeft: 20,
  },
});
