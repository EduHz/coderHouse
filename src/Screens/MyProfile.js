import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import AddButton from "../Components/AddButon";

const MyProfile = () => {
  const [image, setImage] = useState(null);

  return (
    <View style={styles.container}>
      {image ? null : (
        <>
          <Image
            source={require("../../assets/defaultProfile.png")}
            style={styles.image}
            recizeMode="cover"
          />
          <AddButton title="Add Profile Picture" />
        </>
      )}
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: { width: 200, height: 200 },
});
