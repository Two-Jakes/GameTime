import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import two_jakes_repo from '../../constants/constants';

import styles from "./footer.style";


const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.footerBtn}
        onPress={() => Linking.openURL(two_jakes_repo)}
      >
        <Text style={styles.footerBtnText}>© Two Jakes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;