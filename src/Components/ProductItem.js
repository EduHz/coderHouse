import {
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { colors } from "../Global/colors";
import { useDispatch } from "react-redux";
import { setProductSelected } from "../features/shop/shopSlice";

const ProductItem = ({ item, navigation, route }) => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        dispatch(setProductSelected(item.id));
        navigation.navigate("Product", { id: item.id });
      }}
    >
      <Text style={width > 350 ? styles.text : styles.textMin}>
        {item.title}
      </Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.thumbnail }}
      />
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: "90%", // Ajustado el ancho para un mejor espacio
    height: 120, // Ajustado la altura para más espacio vertical
    backgroundColor: colors.white, // Cambiado el color de fondo a blanco
    marginHorizontal: "5%", // Ajustado el margen horizontal
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10, // Añadido un borde redondeado
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    width: "60%",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Josefin", // Añadida la fuente Josefin para una apariencia más estilizada
  },
  textMin: {
    width: "60%",
    textAlign: "center",
    fontSize: 16, // Ajustado el tamaño de fuente
    fontFamily: "Josefin",
  },
  image: {
    minWidth: 90,
    height: 90,
    width: "30%",
    borderRadius: 5, // Añadido un borde redondeado
  },
});
