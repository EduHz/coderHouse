import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import Home from "./src/Screens/Home";
import ItemListCategories from "./src/Screens/ItemListCategories";
import ItemDetail from "./src/Screens/ItemDetail";
import { colors } from "./src/Global/colors";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProductDetailId, setSelectedProductDetailId] = useState(0);

  const [fontLoaded] = useFonts({
    Josefin: require("./assets/Fonts/JosefinSans-Bold.ttf"),
  });

  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor={colors.green1} />
      <SafeAreaView style={styles.container}>
        {selectedCategory ? (
          selectedProductDetailId !== 0 ? (
            <ItemDetail
              productDetailId={selectedProductDetailId}
              setProductDetailId={setSelectedProductDetailId}
            />
          ) : (
            <ItemListCategories
              category={selectedCategory}
              setCategorySelected={setSelectedCategory}
              setProductDetailId={setSelectedProductDetailId}
            />
          )
        ) : (
          <Home setCategorySelected={setSelectedCategory} />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default App;
