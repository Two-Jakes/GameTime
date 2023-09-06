import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  titleText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    marginTop: 40,
    marginBottom: 10,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  boardText: {

  },
  cardImage: {
    width: 70,
    height: 100,
  },
  boardSpaceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
    padding: 10
  },
  boardSpace: {
    padding: 30,
    length: 30,
    width: 30,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: 'dotted',
  },
  boardSpaceWithCard: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: 'dotted',
  }
});

export default styles;