import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { colors } from "../Global/colors";

const Header = ({ title = "Producto" }) => {
  const { width, height } = useWindowDimensions();
  const landscape = width > height;

  return (
    <View style={landscape ? styles.containerLandscape : styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green1,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  containerLandscape: {
    backgroundColor: colors.green1,
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Josefin",
  },
});

export default Header;
