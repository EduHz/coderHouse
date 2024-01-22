import { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import AddButton from "../Components/AddButton";
import * as ImagePicker from "expo-image-picker";
import { usePostProfileImageMutation } from "../app/services/shopServices";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../app/services/shopServices";
import { colors } from "../Global/colors";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [triggerProfileImage] = usePostProfileImageMutation();
  const localId = useSelector((state) => state.auth.value.localId);
  const { data, isSuccess } = useGetProfileImageQuery(localId);

  useEffect(() => {
    if (isSuccess && data) setImage(data.image);
  }, [isSuccess]);

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (granted) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.3,
        base64: true,
      });

      if (!result.canceled) {
        setImage("data:image/jpeg;base64," + result.assets[0].base64);
      }
    }
  };

  const confirmImage = () => {
    triggerProfileImage({ localId, image });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
          <AddButton title="Take another photo" onPress={pickImage} />
          <AddButton title="Confirm photo" onPress={confirmImage} />
        </>
      ) : (
        <>
          <View style={styles.noPhotoContainer}>
            <Text style={styles.noPhotoText}>No photo to show</Text>
          </View>
          <AddButton title={"Take a photo"} onPress={pickImage} />
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 10, // Añadido un borde redondeado
    marginBottom: 10, // Espaciado inferior
  },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: colors.blue2, // Cambiado el color del borde
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Añadido un borde redondeado
  },
  noPhotoText: {
    textAlign: "center",
  },
});
