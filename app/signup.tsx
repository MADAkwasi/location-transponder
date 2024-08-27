import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Txt from "../components/Text";
import { Colors } from "../constants/Colors";
import Heading from "../components/Heading";
import TextButton from "../components/TextButton";
import RegistrationStep from "../components/RegistrationStep";
import { BarIndicator } from "react-native-indicators";


function Signup() {
  const [step, setStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // async function handleSignup() {
  //   try {
  //     setIsLoading(true);
  //     const user = await registerStudent(
  //       firstName,
  //       lastName,
  //       otherNames,
  //       email,
  //       password,
  //       passwordConfirm,
  //       referenceNumber,
  //       +year,
  //       programme
  //     );
  //     console.log(user);
  //     setStudent(user.data.student);
  //     setToken(user.token);
  //     if (!token) throw new Error("Registration Failed");
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   return navigation.navigate("Main");
  // }

  return (
    <View style={styles.cont}>
      <Heading />
      <View style={styles.form}>
        <View style={styles.txtView}>
          <Txt
            style={{
              fontFamily: "RubikMaps",
              fontSize: 28,
              color: Colors.text,
              textAlign: "left",
            }}
          >
            Register
          </Txt>
          <Txt
            style={{
              fontFamily: "OpenSansBold",
              fontSize: 11,
              color: Colors.text,
            }}
          >
            (Step {step} of 3)
          </Txt>
        </View>
        <RegistrationStep />
        <TextButton href="/home">
          {isLoading
            ? <BarIndicator size={20} color="white" />
            : `Register`}
        </TextButton>
        {step === 1 && <Txt>Already have an account?</Txt>}
        <TextButton
          viewStyle={{
            marginTop: 5,
            backgroundColor: "#fff",
            borderColor: Colors.text,
            borderWidth: 2,
          }}
          textStyle={{
            color: Colors.text,
          }}
          href="/"
        >
          Log in
        </TextButton>
      </View>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 100,
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
  },
  txtView: {
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
});
