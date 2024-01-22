import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../Global/colors";

const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{item.title}</Text>
        <Text style={styles.text2}>{item.brand}</Text>
        <Text style={styles.text3}>
          Quantity: {item.quantity} | Price: $ {item.price}
        </Text>
      </View>
      <Entypo name="trash" size={25} color={colors.black} />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue2,
    margin: 10,
    padding: 10,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
  },
  textContainer: {
    width: "70%",
    gap: 5,
  },
  text1: {
    fontSize: 16, // Ajustado el tamaño de la fuente
    color: colors.white,
    fontFamily: "Josefin",
  },
  text2: {
    fontSize: 14, // Ajustado el tamaño de la fuente
    color: colors.white,
    fontFamily: "Josefin",
  },
  text3: {
    fontSize: 12, // Ajustado el tamaño de la fuente
    color: colors.white,
    fontFamily: "Josefin",
  },
});
