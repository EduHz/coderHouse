import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

const ListItem = ({ item, index, handleDelete, handleCheck }) => (
  <View style={styles.listItem}>
    <Text style={item.checked ? styles.checkedText : {}}>{item.text}</Text>
    <View style={styles.buttonContainer}>
      <Button color="red" title="Delete" onPress={() => handleDelete(index)} />
      <Button title="Check" onPress={() => handleCheck(index)} />
    </View>
  </View>
);

const ListItems = ({ list, handleDelete, handleCheck }) => (
  <FlatList
    data={list}
    renderItem={({ item, index }) => (
      <ListItem
        item={item}
        index={index}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  checkedText: {
    textDecorationLine: "line-through",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default ListItems;
