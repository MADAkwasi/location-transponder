import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import * as Location from "expo-location";
import { FontAwesome5 } from "@expo/vector-icons";
import Txt from "@/components/Text";
import IconBtn from "@/components/IconBtn";
import Heading from "@/components/Heading";
import io from "socket.io-client";

interface State {
  lat?: number;
  lng?: number;
}

function Welcome() {
  const [location, setLocation] = useState<State>({
    lat: undefined,
    lng: undefined,
  });
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
          setLocation({ lat: latitude, lng: longitude });
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
      socket.disconnect(); // Disconnect from the WebSocket server
    };
  }, []);

  return (
    <View style={styles.cont}>
      <ImageBackground
        source={require("../assets/images/welcome.png")}
        style={styles.background}
        resizeMode="center"
      >
        <Heading />
        <View style={styles.outro}>
          <Txt style={{ fontSize: 25 }}>Let's get started!</Txt>
          <Txt style={{}}>
            Sign up now and keep track of all active shuttles on campus
          </Txt>

          <IconBtn href="/login">
            <FontAwesome5 name="arrow-right" size={24} color="white" />
          </IconBtn>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  outro: {
    position: "absolute",
    bottom: 0,
    marginBottom: 50,
    width: "100%",
  },
});
