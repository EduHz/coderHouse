import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../Global/colors";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useLoginMutation } from "../app/services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [triggerLogin, { data, isError, isSuccess, error, isLoading }] =
    useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSuccess) dispatch(setUser(data));
    if (isError) console.log(error);
  }, [data, isError, isSuccess]);

  const onSubmit = () => {
    triggerLogin({ email, password });
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error=""
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error=""
        />
        <SubmitButton onPress={onSubmit} title="Login" />
        <Text style={styles.sub}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.subLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGray, // Set a light background color
  },
  container: {
    width: "80%", // Adjusted width for better spacing
    backgroundColor: colors.white, // Set a white background color
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: "Lobster",
    marginBottom: 10,
  },
  sub: {
    fontSize: 16,
    fontFamily: "Josefin",
    marginTop: 10,
  },
  subLink: {
    fontSize: 16,
    fontFamily: "Josefin",
    color: colors.blue, // Set a different color
    marginTop: 5,
  },
});
