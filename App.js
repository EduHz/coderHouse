import React, { useState } from "react";
import { View, Modal, StyleSheet } from "react-native";
import AddItem from "./components/AddItem";
import DeleteModal from "./components/DeleteModal";
import ListItems from "./components/lista/ListItems";

export default function App() {
  const [list, setList] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleAddItem = (newItem) => {
    setList([...list, { text: newItem, checked: false }]);
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
  };

  const handleCheck = (index) => {
    const newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
  };

  const confirmDelete = () => {
    const newList = [...list];
    newList.splice(deleteIndex, 1);
    setList(newList);
    setDeleteIndex(null);
  };

  const cancelDelete = () => {
    setDeleteIndex(null);
  };

  return (
    <View style={styles.container}>
      <AddItem onSubmit={handleAddItem} />
      <ListItems
        list={list}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <Modal visible={deleteIndex !== null} animationType="slide">
        <DeleteModal
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
