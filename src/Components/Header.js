import React from "react";
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
    backgroundColor: colors.blue2,
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
  },
  text: {
    fontSize: 24,
    fontFamily: "Josefin",
    color: colors.white,
    fontWeight: "bold",
  },
});
