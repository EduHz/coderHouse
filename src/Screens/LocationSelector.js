import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { colors } from "../Global/colors";
import MapPreview from "../Components/MapPreview";

export default function LocationSelector({ navigation }) {
  const [location, setLocation] = useState({ latitud: "", longitude: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitud: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Addresses</Text>
      {/* Flatlist con las direcciones */}
      <View style={styles.locationContainer}>
        {location ? (
          <>
            <Text>
              lat : {location.latitud}, long : {location.longitude}
            </Text>
            <MapPreview location={location} />
          </>
        ) : (
          <Text>{error}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 130,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  locationContainer: {
    width: 200,
    height: 100,
    borderWidth: 2,
    borderColor: colors.green3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
