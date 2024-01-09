import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import CartStack from "./CartStack";
import ShopStack from "./ShopStack";
import NavigationIcons from "./NavigationIcons";
import OrderStack from "./OrderStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="ShopStack"
          component={ShopStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <NavigationIcons
                focused={focused}
                name={"shopping"}
                text={"Shop"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CartStack"
          component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <NavigationIcons focused={focused} name={"cart"} text={"Cart"} />
            ),
          }}
        />
        <Tab.Screen
          name="OrderStack"
          component={OrderStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <NavigationIcons
                focused={focused}
                name={"format-list-bulleted-square"}
                text={"Order"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#2360E0",
    shadowColor: "black",
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 65,
  },
});
