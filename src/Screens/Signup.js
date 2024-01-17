import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { colors } from "../Global/colors";
import { useSignupMutation } from "../app/services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [triggerSignup, { data, isError, isSuccess, error, isLoading }] =
    useSignupMutation();

  useEffect(() => {
    if (isSuccess) dispatch(setUser(data));
    if (isError) console.log(error);
  }, [data, isError, isSuccess]);

  const validateForm = () => {
    try {
      signupSchema.validateSync(signupData);
      triggerSignup({ email: signupData.email, password: signupData.password });
    } catch (validationError) {
      const { path, message } = validationError;
      setErrors((prevErrors) => ({ ...prevErrors, [path]: message }));
    }
  };

  const handleInputChange = (field, value) => {
    setSignupData((prevData) => ({ ...prevData, [field]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        {["email", "password", "confirmPassword"].map((field) => (
          <InputForm
            key={field}
            label={field === "confirmPassword" ? "Confirm password" : field}
            value={signupData[field]}
            onChangeText={(text) => handleInputChange(field, text)}
            isSecure={field === "password" || field === "confirmPassword"}
            error={errors[field]}
          />
        ))}
        <SubmitButton title="Send" onPress={validateForm} />
        <Text style={styles.sub}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: colors.green1,
    gap: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: "Lobster",
  },
  sub: {
    fontSize: 14,
    fontFamily: "Josefin",
  },
  subLink: {
    fontSize: 14,
    fontFamily: "Josefin",
    color: "blue",
  },
});
