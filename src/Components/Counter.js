import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../Features/Counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value); // Cambiado de state.counterReducer.value a state.counter.value
  const dispatch = useDispatch();
  const [inputToAdd, setInputToAdd] = useState("");

  const confirmAdd = () => {
    const amountToAdd = parseInt(inputToAdd, 10) || 0; // Convert to number or default to 0 if not a valid number
    dispatch(incrementByAmount(amountToAdd));
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterSection}>
        <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.countText}>{count}</Text>
        <Pressable style={styles.button} onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          placeholder={"Cantidad a aumentar"}
          value={inputToAdd}
          onChangeText={(text) => setInputToAdd(text)}
          keyboardType="numeric"
          onKeyPress={(event) => {
            if (event.nativeEvent.key === "." || isNaN(event.nativeEvent.key)) {
              event.preventDefault();
            }
          }}
        />
        <Pressable style={styles.addButton} onPress={confirmAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <Pressable style={styles.resetButton} onPress={() => dispatch(reset())}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  counterSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  countText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inputSection: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#2ecc71",
    padding: 10,
    borderRadius: 5,
  },
  resetButton: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
