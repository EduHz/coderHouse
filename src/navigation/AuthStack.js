import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import Signup from "../Screens/Signup";
import Login from "../Screens/Login";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={({ route }) => {
        return {
          header: () => <Header title="Welcome" />,
        };
      }}
    >
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
