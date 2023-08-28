import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 50,
  },
  toeText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    marginTop: 30,
    marginBottom: 30,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  boardText: {
    fontSize: SIZES.xxLarge,
    color: COLORS.white,
    fontFamily: FONT.bold,
    paddingLeft: 7
  },
  boardSpaceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boardSpace: {
    padding: 30,
    length: 100,
    width: 100,
    justifyContent: 'space-between',
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  }
});

export default styles;