import { StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import Colors from "../constants/colors"
import Subtitle from "../components/Subtitle"

function GameOverScreen({pickedNumber}) {
    return (
        <View style={styles.screen}>
            <Title>Game Over!</Title>
            <Subtitle>The picked number was:</Subtitle>
            <Text style={styles.numberContainer}>{pickedNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 50,
        marginHorizontal: 30,
        borderRadius: 20,
        padding: 30,
        backgroundColor: Colors.accent
    },
    numberContainer: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10
    }
})

export default GameOverScreen