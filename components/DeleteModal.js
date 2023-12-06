import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const DeleteModal = ({ confirmDelete, cancelDelete }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text>Confirm Delete ?</Text>
      </View>
      <View style={styles.modalButtonsContainer}>
        <TouchableHighlight
          style={styles.modalButton}
          underlayColor="#0056b3"
          onPress={confirmDelete}
        >
          <Text style={styles.modalButtonText}>Confirm</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.modalButton}
          underlayColor="#0056b3"
          onPress={cancelDelete}
        >
          <Text style={styles.modalButtonText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  modalContent: {
    alignItems: "center",
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#007BFF",
    marginHorizontal: 10,
  },
  modalButtonText: {
    color: "white",
  },
});

export default DeleteModal;
