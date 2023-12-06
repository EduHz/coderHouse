import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

const DeleteModal = ({ visible, onCancel, onConfirm }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            Are you sure you want to delete this item?
          </Text>
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onCancel} color="gray" />
            <Button title="Delete" onPress={onConfirm} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default DeleteModal;
