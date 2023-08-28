import { icons, images } from "../../constants";
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
                        source={images.tictactoe}
                        resizeMode='contain'
                        style={styles.gameBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={images.pong}
                        resizeMode='contain'
                        style={styles.gameBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={images.blackjack}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={images.snake}
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
                        source={images.coming}
                        resizeMode='contain'
                        size
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={images.coming}
                        resizeMode='contain'
                        style={styles.gameBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={images.coming}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={images.coming}
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