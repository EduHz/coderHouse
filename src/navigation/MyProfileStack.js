import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import MyProfile from "../Screens/MyProfile";
import ImageSelector from "../Screens/ImageSelector"; // Import ImageSelector

const Stack = createNativeStackNavigator();

export default function MyProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={{ header: () => <Header title="Profile" /> }}
    >
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen name="ImageSelector" component={ImageSelector} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
