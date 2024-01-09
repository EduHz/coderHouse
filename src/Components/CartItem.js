import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../Global/colors";

export default function CartItem({ item }) {
  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text2}>{item.brand}</Text>
        <Text style={styles.text2}>$ {item.price}</Text>
      </View>
      <MaterialCommunityIcons
        name={"delete"}
        color={"#8594E1"}
        size={30} // Aumenta el tamaño del icono en 4
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 100,
    backgroundColor: colors.green2,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: { fontFamily: "Josefin", fontSize: 19, color: colors.white1 },
  text2: { fontFamily: "Josefin", fontSize: 14, color: colors.white1 },
});
