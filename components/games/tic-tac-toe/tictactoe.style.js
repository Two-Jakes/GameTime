import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
  },
  toeText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
  boardSpaceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boardSpace: {
    padding: 10,
    length: 50,
    width: 50,
    justifyContent: 'space-between',
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  }
});

export default styles;