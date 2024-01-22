import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/colors";

const Header = ({ title = "Producto" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue1, // Cambiado a un tono de azul
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1, // Añadido un borde inferior para separar del contenido
    borderBottomColor: colors.blue2, // Color del borde inferior similar al nuevo color de fondo
  },
  text: {
    fontSize: 20,
    fontFamily: "Josefin",
    color: colors.white, // Añadido un color de texto blanco para mejorar la legibilidad
  },
});
