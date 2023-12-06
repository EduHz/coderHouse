import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native-web";

const AddItem = ({ onSubmit }) => {
  const [item, setItem] = useState("");

  const handleSubmit = () => {
    if (item.trim() !== "") {
      onSubmit(item);
      setItem("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add item..."
        value={item}
        onChangeText={(text) => setItem(text)}
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
  },
});
