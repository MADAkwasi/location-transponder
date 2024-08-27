import { ImageBackground, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Txt from "@/components/Text";
import IconBtn from "@/components/IconBtn";
import Heading from "@/components/Heading";

function Welcome() {

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
