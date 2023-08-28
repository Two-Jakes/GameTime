import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -80,
    backgroundColor: COLORS.accentBlue,
    flexDirection:'row',
    height:40,
    alignItems:'center',

  },
  footerBtn: {
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
  },
  footerBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;
