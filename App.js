import React, { useState } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import AddItem from "./components/AddItem";
import Item from "./components/lista/Item";

export default function App() {
  const [items, setItems] = useState([]);
  const addItem = (text) => {
    setItems([...items, { id: Date.now().toString(), text, checked: false }]);
  };
  const toggleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item item={item} toggleCheck={toggleCheck} deleteItem={deleteItem} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
});
