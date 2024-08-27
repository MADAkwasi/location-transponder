import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import Txt from "../components/Text";
import { WaveIndicator } from "react-native-indicators";
import TextButton from "@/components/TextButton";
import * as Location from "expo-location";
import io from "socket.io-client";

export default function Screen() {
  const [location, setLocation] = useState<object>();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const socket = io("https://web-socket-setup.onrender.com");

  useEffect(() => {
    let locationSubscription: Location.LocationSubscription | null;

    const startLocationUpdates = async () => {
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // Start watching the location
      locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000, // Update every 5 seconds
          distanceInterval: 10, // Update every 10 meters
        },
        (newLocation) => {
          const { latitude, longitude } = newLocation.coords;
          setLocation({ latitude, longitude });
          console.log(location);

          // Send the current location to the WebSocket server
          socket.emit("locationUpdate", {
            latitude,
            longitude,
            timestamp: new Date().toISOString(),
          });
        }
      );
    };

    startLocationUpdates();

    return () => {
      if (locationSubscription) {
        locationSubscription.remove(); // Stop watching location when the component unmounts
      }
      
    };
  }, []);

  return (
    <View style={styles.body}>
      <WaveIndicator color="#13b80d" size={100} />
      <Txt style={{ color: "#fff", fontSize: 20 }}>Shuttle 009</Txt>
      <Txt style={{ color: "#fff", fontSize: 20 }}>Status: Active</Txt>
      <TextButton
        viewStyle={{
          marginTop: 5,
          backgroundColor: "#13b80d",
          borderColor: Colors.text,
          borderWidth: 2,
        }}
        textStyle={{
          color: Colors.text,
        }}
        href="/"
      >
        Deactivate
      </TextButton>
      <TextButton
        viewStyle={{
          marginTop: 5,
          backgroundColor: "#13b80d",
          borderColor: Colors.text,
          borderWidth: 2,
        }}
        textStyle={{
          color: Colors.text,
        }}
        href="/"
      >
        Logout
      </TextButton>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.text,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
});
