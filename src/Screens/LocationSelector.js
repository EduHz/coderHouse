import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { colors } from "../Global/colors";

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
      <Text>My Addresses</Text>
      {/* Flatlist con las directions */}
      {location ? (
        <View styles={styles.noLocationContainer}>
          <Text>
            Lat: {location.latitud} , long: {location.longitude}
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.noLocationContainer}>
            <Text>{error}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingBottom: 130,
  },
  noLocationContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: colors.green3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
