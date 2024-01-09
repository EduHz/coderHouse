import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/Global/colors";
import TabNavigator from "./src/navigation/TabNavigator";
import { fonts } from "./src/Global/fonts";

const App = () => {
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor={colors.green1} />
      <TabNavigator />
    </>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "start",
//   },
// });

// Video en 1:22:44
