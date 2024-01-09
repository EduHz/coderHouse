import { StyleSheet } from "react-native";
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

const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={getScreenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={ItemListCategories} />
      <Stack.Screen name="Product" component={ItemDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;

const styles = StyleSheet.create({});
