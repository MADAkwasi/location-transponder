import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

function Txt({ children, style }: Props) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default Txt;

const styles = StyleSheet.create({
  text: {
    fontFamily: "OpenSans",
    textAlign: "center",
    marginVertical: 5,
  },
});
