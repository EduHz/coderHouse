import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const CustomTabIcon = ({ icon, label, focused }) => {
  return (
    <View style={styles.container}>
      <Entypo name={icon} size={40} color={focused ? "white" : "#EEE"} />
      <Text
        style={{ ...styles.text, ...{ color: focused ? "white" : "#EEE" } }}
      >
        {label}
      </Text>
    </View>
  );
};

export default CustomTabIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto", // Changed font family
    marginTop: 5, // Added margin top for spacing
  },
});
