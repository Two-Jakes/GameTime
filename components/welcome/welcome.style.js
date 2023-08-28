import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  main: {
    marginTop: 50,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    marginTop: 15,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  gameBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  gameBtnImage: {
    alignItems: "center",
    width: 90,
    height: 90,
  },
  gameTitle: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.regular,
  },
  gameBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
