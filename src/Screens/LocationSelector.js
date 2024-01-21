import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { colors } from "../Global/colors";
import MapPreview from "../Components/MapPreview";
import { useDispatch } from "react-redux";

export default function LocationSelector({ navigation }) {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [error, setError] = useState("");
  const [address, setAddress] = useState("");

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
  useEffect(() => {
    (async () => {
      try {
        if (location.latitude) {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`
          );

          const data = await response.json();
          setAddress(data.results[0].formatted_address);
        }
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [location]);

  const onConfirmAddress = async () => {
    try {
      const locationFormatted = {
        address,
        ...location,
      };
      const data = await triggerPostUserLocation({
        localId,
        locationFormatted,
      });
      console.log(data);
      navigation.goBack();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Addresses</Text>
      {/* Flatlist con las direcciones */}
      <View style={styles.locationContainer}>
        {location ? (
          <>
            <Text>
              lat : {location.latitude}, long : {location.longitude}
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
