import { StyleSheet } from "react-native";
import { Colors } from "react-native-markup-kit";

const ROW_HEIGHT = 50;

export const themeStyles = StyleSheet.create({
  inputWrap: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey60,
    borderTopWidth: 1,
    borderTopColor: Colors.grey60,
    backgroundColor: Colors.white,
    width: '100%',
    marginTop: 10,
    height: ROW_HEIGHT,
    paddingHorizontal: 17,
  },
  todoItemWrap: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey60,
    borderTopWidth: 1,
    borderTopColor: Colors.grey60,
    backgroundColor: Colors.white,
    width: '100%',
    // marginTop: 10,
    height: 70,
    paddingHorizontal: 17,
  },
});
