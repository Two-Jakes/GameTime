import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    marginTop: 30,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  boardTextSmall: {
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    color: COLORS.white,
    marginLeft: 2,
    marginRight: 8
  },
  boardTextMed: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginLeft: 15,
    marginRight: 15
  },
  boardTextBot: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginLeft: 10,
    marginRight: 10
  },
  boardTextPlay: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
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
  },
  boardButton: {
    backgroundColor: COLORS.accentBlue,
    padding: 20,
    length: 10,
    width: 85,
    borderWidth: 5,
    borderRadius: 15,
  },
  boardPlayButton: {
    backgroundColor: COLORS.accentGreen,
    padding: 20,
    length: 10,
    width: 85,
    borderWidth: 5,
    borderRadius: 15,
  },
  boardButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40
  },
  boardButtonGameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  boardTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

  },
  boardFooter: {
    marginTop: 200,
  },
});

export default styles;