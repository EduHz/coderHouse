import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import Cart from "../Screens/Cart";

const Stack = createNativeStackNavigator();

const getScreenOptions = ({ route }) => {
  const title = "Carrito";
  // route.name === "Home"
  //   ? "Categories"
  //   : route.name === "Category"
  //   ? route.params.category
  //   : "Carrito";

  return {
    header: () => <Header title={title} />,
  };
};

export default function CartStack() {
  return (
    <Stack.Navigator initialRouteName="Cart" screenOptions={getScreenOptions}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
