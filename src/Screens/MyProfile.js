import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AddButton from "../Components/AddButton";
import { useGetProfileImageQuery } from "../app/services/shopServices";
import { useSelector } from "react-redux";

export default function MyProfile({ navigation }) {
  const localId = useSelector((state) => state.auth.value.localId);
  const { data } = useGetProfileImageQuery(localId);

  const handleLaunchLocation = async () => {
    navigation.navigate("LocationSelector");
  };

  return (
    <View style={styles.container}>
      <Image
        source={data ? { uri: data.image } : require("../../assets/user.png")}
        style={styles.profileImage}
        resizeMode="cover"
      />
      <AddButton
        title={"Add profile picture"}
        onPress={() => navigation.navigate("ImageSelector")}
      />
      <AddButton onPress={handleLaunchLocation} title="My addresses" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100, // Hace que la imagen sea circular
    borderWidth: 2, // Añade un borde de 2 puntos
    borderColor: "#fff", // Color del borde
  },
});
