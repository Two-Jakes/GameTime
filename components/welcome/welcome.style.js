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
    backgroundColor: COLORS.accentBlue
  },
  gameBtnImage: {
    alignItems: "center",
    width: 50,
    height: 50,
  },
  gameTitle: {

  },
  gameBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
