import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/texture.jpg")}
      style={styles.container}
    >
      <Text style={styles.firstText}>Hola Coder!</Text>
      <Text style={styles.secondText}>
        Welcome to your first App Eduardo :)
      </Text>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  firstText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 10,
  },
  secondText: {
    color: "yellow",
    fontSize: 18,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
  },
});
