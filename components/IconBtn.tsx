import { Pressable, StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Href, Link } from "expo-router";

interface Props {
  href: Href;
  children: React.ReactNode;
}

function IconBtn({ children, href }: Props) {
  return (
    <Pressable style={styles.btn}>
      <Link href={href}>
        <View style={styles.icon}>{children}</View>
      </Link>
    </Pressable>
  );
}

export default IconBtn;

const styles = StyleSheet.create({
  btn: {
    alignSelf: "center",
  },
  icon: {
    backgroundColor: Colors.text,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
