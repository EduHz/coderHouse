import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../Global/colors";
import CardShadow from "../Wrappers/CardShadow";
import { useDispatch } from "react-redux";
import { setProductsFilteredByCategory } from "../features/shop/shopSlice";

const CategoryItem = ({ category, navigation, route }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => {
        dispatch(setProductsFilteredByCategory(category));
        navigation.navigate("Category", { category });
      }}
    >
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
    backgroundColor: colors.blue2, // Cambiado a un tono de azul
    marginVertical: 10, // Cambiado para proporcionar un espacio vertical uniforme
    padding: 15, // Ajustado el relleno para mayor espaciado
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Agregado un borde redondeado
  },
  text: {
    fontSize: 18,
    fontFamily: "Lobster",
    color: colors.white, // Añadido un color de texto blanco para mejorar la legibilidad
  },
});
