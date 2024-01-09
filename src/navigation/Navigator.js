import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"ShopStack"} component={ShopStack} />
        <Tab.Screen name={"CartStack"} component={CartStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
