import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../Global/colors";

const AddButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue2, // Cambiado a un tono de azul
    width: "70%",
    paddingVertical: 10, // Ajustado el padding vertical
    marginVertical: 10, // Ajustado el margin vertical
    borderRadius: 8, // Añadido un borde redondeado
  },
  text: {
    color: colors.white,
    textAlign: "center",
    fontSize: 18,
  },
});
