import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import AddButton from "../Components/AddButon";

const MyProfile = ({ navigation }) => {
  const [image, setImage] = useState(null);

  // const navigateToImageSelector = () => {
  //   navigation.navigate("ImageSelector");
  // };

  return (
    <View style={styles.container}>
      {image ? null : (
        <>
          <Image
            source={require("../../assets/defaultProfile.png")}
            style={styles.image}
            resizeMode="cover" // Corrected typo: recizeMode to resizeMode
          />
          <AddButton
            title="Add Profile Picture"
            onPress={() => navigation.navigate("ImageSelector")}
          />
        </>
      )}
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  image: { width: 200, height: 200 },
});
