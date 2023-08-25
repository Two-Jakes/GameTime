import { icons } from "../../constants";
import styles from "./welcome.style";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";

const Welcome = () => {
    return (
        <View style={styles.main}>
            <View style={styles.welcomeMessage}>
                <Text style={styles.welcomeMessage}>Welcome to GameTime!</Text>
            </View>
            {/* -----------------------------ROW ONE------------------------------------ */}
            <View style={styles.gameBtnContainer}>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={icons.no_image_placeholder}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={icons.no_image_placeholder}
                        resizeMode='contain'
                        style={styles.gameBtnImage}
                        width={50} 
                        height={50}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={icons.no_image_placeholder}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={icons.no_image_placeholder}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
            {/* -----------------------------ROW ONE------------------------------------ */}

            {/* -----------------------------ROW TWO------------------------------------ */}
            <View style={styles.gameBtnContainer}>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={icons.no_image_placeholder}
                        resizeMode='contain'
                        size
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={icons.no_image_placeholder}
                        resizeMode='contain'
                        style={styles.gameBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={icons.no_image_placeholder}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={icons.no_image_placeholder}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
            {/* -----------------------------ROW TWO------------------------------------ */}

        </View>
    )
}

export default Welcome