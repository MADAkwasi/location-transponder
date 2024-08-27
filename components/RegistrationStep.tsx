import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

function RegisterationStep() {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [route, setRoute] = useState<string>("");
  const [type, setType] = useState<string>("");

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name.trim()}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Number"
        value={number.trim()}
        onChangeText={setNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Shuttle Color"
        value={type.trim()}
        onChangeText={setType}
      />
      <TextInput
        style={styles.input}
        placeholder="Shuttle Route"
        value={route.trim()}
        onChangeText={setRoute}
      />
    </>
  );
}

export default RegisterationStep;

const styles = StyleSheet.create({
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
