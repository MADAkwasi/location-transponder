import { useState } from "react";
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import Txt from "../components/Text";
import { Colors } from "../constants/Colors";
import Heading from "../components/Heading";
import TextButton from "../components/TextButton";
import { BarIndicator } from "react-native-indicators";

function Login() {
  const [name, setName] = useState<string>("madarko");
  const [number, setNumber] = useState<string>("Agy3m@n7");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <View style={styles.cont}>
      <Heading />
      <View style={styles.form}>
        <Txt
          style={{
            fontFamily: "RubikMaps",
            fontSize: 28,
            color: Colors.text,
            textAlign: "left",
          }}
        >
          Log In
        </Txt>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Shuttle number"
          value={number}
          onChangeText={setNumber}
          secureTextEntry={true}
        />
        <TextButton href="/">
          {isLoading ? <BarIndicator color="white" size={20} /> : `Log In`}
        </TextButton>
        <Txt>Shuttle not registered?</Txt>
        <TextButton
          href="/signup"
          viewStyle={{
            marginTop: 5,
            backgroundColor: "#fff",
            borderColor: Colors.text,
            borderWidth: 2,
          }}
          textStyle={{
            color: Colors.text,
          }}
        >
          Create Shuttle
        </TextButton>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  form: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 100,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#d9f0ff",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    fontFamily: "OpenSans",
  },
});
