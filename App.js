import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/Global/colors";
import TabNavigator from "./src/navigation/TabNavigator";
import { fonts } from "./src/Global/fonts";
import { Provider } from "react-redux";
import store from "./src/Store/index";

export default function App() {
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.green1} />
      <TabNavigator />
    </Provider>
  );
}
