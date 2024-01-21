import { StyleSheet, View, Image } from "react-native";
import { googleApi } from "../firebase/db";

// ...

export default function MapPreview({ location }) {
  let mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitud},${location.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7C${location.latitud},${location.longitude}&key=${googleApi.mapStatic}`;

  return (
    <View style={styles.container}>
      <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
    </View>
  );
}

// ...

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: { width: 300, height: 300 },
});
