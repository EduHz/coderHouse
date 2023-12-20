import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import ItemListCategories from "../Screens/ItemListCategories";
import ItemDetail from "../Screens/ItemDetail";
import Header from "../Components/Header";

const Stack = createNativeStackNavigator();

const getScreenOptions = ({ route }) => {
  const title =
    route.name === "Home"
      ? "Categories"
      : route.name === "Category"
      ? route.params.category
      : "Detail";

  return {
    header: () => <Header title={title} />,
  };
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={getScreenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={ItemListCategories} />
        <Stack.Screen name="Product" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
