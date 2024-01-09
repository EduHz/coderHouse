import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import allCartItems from "../Data/cart.json";
import { useEffect, useState } from "react";
import CartItem from "../Components/CartItem";
import { colors } from "../Global/colors";

export default function Cart() {
  const [carItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Establece el carrito primero

    // Calcula el total después de establecer el carrito
    const total = allCartItems.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setCartItems(allCartItems);
    setTotal(total);
  }, [allCartItems]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={allCartItems}
        keyExtractor={(item) => item.id}
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
