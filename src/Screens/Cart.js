import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import CartItem from "../Components/CartItem";
import { colors } from "../Global/colors";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.value.items);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate the total based on the cartItems
    const total = cartItems.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(total);
  }, [cartItems]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.confirmContainer}>
        <Pressable>
          <Text style={styles.confirmText}>Confirm</Text>
        </Pressable>
        <Text style={styles.confirmText}>Total: $ {total}</Text>
      </View>
    </View>
  );
}

// Styles...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.white1,
  },
  list: { width: "100%" },
  confirmContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "gray",
    padding: 15,
    width: "100%",
  },
  confirmText: { fontFamily: "PlayFair", fontSize: 18, color: "white" },
});
