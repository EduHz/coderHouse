import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/Global/colors";
import TabNavigator from "./src/navigation/TabNavigator";
import { fonts } from "./src/Global/fonts";
import { Provider } from "react-redux";
import Store from "./src/Store/index";

const App = () => {
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  return (
    <Provider store={Store}>
      <StatusBar backgroundColor={colors.green1} />
      <TabNavigator />
    </Provider>
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
