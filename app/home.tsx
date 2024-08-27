import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import Txt from "../components/Text";
import { WaveIndicator } from "react-native-indicators";
import TextButton from "@/components/TextButton";

export default function Screen() {
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
