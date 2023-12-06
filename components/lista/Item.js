import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DeleteModal from "../DeleteModal";

const Item = ({ item, toggleCheck, deleteItem }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDeleteItem = () => {
    deleteItem(item.id);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleCheck(item.id)}>
        <Text style={item.checked ? styles.checkedText : styles.text}>
          {item.text}
        </Text>
      </TouchableOpacity>

      {!item.checked && (
        <TouchableOpacity onPress={() => toggleCheck(item.id)}>
          <Text style={styles.checkText}>Check</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>

      <DeleteModal
        visible={isModalVisible}
        onCancel={toggleModal}
        onConfirm={handleDeleteItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
  checkedText: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "gray",
  },
  checkText: {
    fontSize: 16,
    color: "green",
  },
  deleteText: {
    color: "red",
    fontSize: 16,
  },
});

export default Item;
