import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Colors } from "../constants/Colors";
import { Link, Href } from "expo-router";

interface Props {
  children: React.ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  href: Href;
}

function TextButton({ children, viewStyle, textStyle, href }: Props) {
  return (
    <Pressable
      style={[styles.btnView, viewStyle]}
      android_ripple={{ color: "#d9f0ff" }}
    >
      <View>
        <Link href={href} style={[styles.text, textStyle]}>
          {children}
        </Link>
      </View>
    </Pressable>
  );
}

export default TextButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "OpenSans",
    color: "white",
    textAlign: "center",
  },
  btnView: {
    backgroundColor: Colors.text,
    padding: 10,
    borderRadius: 10,
    marginVertical: 17,
  },
});
