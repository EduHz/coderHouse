import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NavigationIcons = ({ focused, name, text }) => {
  return (
    <View style={styles.iconsView}>
      <MaterialCommunityIcons
        style={styles.materialIcons}
        name={name}
        color={focused ? "white" : "#8594E1"}
        size={30} // Aumenta el tamaño del icono en 4
      />
      <Text style={styles.textCart}>{text}</Text>
    </View>
  );
};

export default NavigationIcons;

const styles = StyleSheet.create({
  textCart: { color: "#C7DFE3", fontSize: 14, fontFamily: "Josefin" },
  iconsView: {
    alignItems: "center",
  },
  materialIcons: {
    paddingBottom: 4,
  },
});
