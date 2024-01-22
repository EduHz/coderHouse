import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AddButton from "../Components/AddButton";
import * as Location from "expo-location";
import MapPreview from "../Components/MapPreview";
import { usePostUserLocationMutation } from "../app/services/shopServices";
import { useSelector } from "react-redux";

const LocationSelector = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.value.localId);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [address, setAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [triggerPostUserLocation] = usePostUserLocationMutation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } catch (error) {
        setErrorMsg(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    // Implementación de geocodificación inversa
    (async () => {
      try {
        if (location.latitude !== null) {
          const reverseGeocodingResponse = await fetch(
            // https://maps.googleapis.com/maps/api/geocode/json?latlng=19.4326,-99.1332&key=AIzaSyA4olL8zJhdV4NImTwKNha2ArZ7KybdiP8
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyA4olL8zJhdV4NImTwKNha2ArZ7KybdiP8`
          );

          const reverseGeocodingData = await reverseGeocodingResponse.json();
          const formattedAddress =
            reverseGeocodingData.results[0]?.formatted_address ||
            "Dirección desconocida";

          setAddress(formattedAddress);
        }
      } catch (error) {
        console.error("Error en la geocodificación inversa:", error.message);
      }
    })();
  }, [location]);

  const onConfirmAddress = async () => {
    try {
      const locationFormatted = {
        address,
        latitude: location.latitude,
        longitude: location.longitude,
      };
      const data = await triggerPostUserLocation({
        localId,
        locationFormatted,
      });
      console.log(data);
      navigation.goBack();
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {address}
        {/* Lat: {location.latitude}, Long: {location.longitude} */}
      </Text>
      <MapPreview latitude={location.latitude} longitude={location.longitude} />
      <AddButton title="Confirmar Localizacion" onPress={onConfirmAddress} />
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
    gap: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
});
