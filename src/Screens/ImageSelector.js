import { useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useDispatch } from "react-redux";
import AddButton from "../Components/AddButon";
import { colors } from "../Global/colors";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const verifyCameraPermissions = async () => {};
  const pickImage = () => {};
  const confirmImage = () => {};

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <AddButton title="Take another photo" onPress={pickImage} />
          <AddButton title="Confirm photo" onPress={confirmImage} />
        </>
      ) : (
        <>
          <View style={styles.noPhotoContainer}>
            <Text>No photo to show...</Text>
          </View>
          <AddButton title="Take a photo" onPress={pickImage} />
        </>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  image: { width: 200, height: 200 },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: colors.green3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
