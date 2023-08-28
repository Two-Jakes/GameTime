import { images } from "../../constants";
import styles from "./welcome.style";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import { useRouter } from "expo-router";

const Welcome = () => {
    const navigate = useRouter();
    return (
        <View style={styles.main}>
            <View style={styles.welcomeMessage}>
                <Text style={styles.welcomeMessage}>Welcome to GameTime!</Text>
            </View>
            {/* -----------------------------ROW ONE------------------------------------ */}
            <View style={styles.gameBtnContainer}>
                <TouchableOpacity style={styles.gameBtn} onPress={() => navigate.push("game-nav/tictactoe/tictactoeview")}>
                    <Image
                        source={images.tictactoe}
                        resizeMode='contain'
                        style={styles.gameBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => navigate.push("game-nav/pong/pongview")}>
                    <Image
                        source={images.pong}
                        resizeMode='contain'
                        style={styles.gameBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => navigate.push("game-nav/bj/bjview")}>
                    <Image
                        source={images.blackjack}
                        resizeMode='contain'
                        style={styles.gameBtnImage}
                    />
                </TouchableOpacity>
            </View>
            {/* -----------------------------ROW ONE------------------------------------ */}

            {/* -----------------------------ROW TWO------------------------------------ */}
            <View style={styles.gameBtnContainer}>
                <TouchableOpacity style={styles.gameBtn} onPress={() => navigate.push("game-nav/snake/snakeview")}>
                    <Image
                        source={images.snake}
                        resizeMode='contain'
                        style={styles.gameBtnImage}
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
                        style={styles.gameBtnImage}
                    />
                </TouchableOpacity>
            </View>
            {/* -----------------------------ROW TWO------------------------------------ */}

            {/* -----------------------------ROW THREE------------------------------------ */}
            <View style={styles.gameBtnContainer}>
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
                        style={styles.gameBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={images.coming}
                        resizeMode='contain'
                        style={styles.gameBtnImage}
                    />
                </TouchableOpacity>
            </View>
            {/* -----------------------------ROW THREE------------------------------------ */}

            {/* -----------------------------ROW FOUR------------------------------------ */}
            <View style={styles.gameBtnContainer}>
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
                        style={styles.gameBtnImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameBtn} onPress={() => ({})}>
                    <Image
                        source={images.coming}
                        resizeMode='contain'
                        style={styles.gameBtnImage}
                    />
                </TouchableOpacity>
            </View>
            {/* -----------------------------ROW FOUR------------------------------------ */}

        </View>
    );
}

export default Welcome