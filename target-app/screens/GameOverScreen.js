import { StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Card from "../components/Card"

function GameOverScreen({pickedNumber}) {
    return (
        <View style={styles.screen}>
            <Card>
                <Title>Game Over!</Title>
                <Subtitle>The picked number was:</Subtitle>
                <Text style={styles.numberContainer}>{pickedNumber}</Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 50,
        marginHorizontal: 30
    },
    numberContainer: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10
    }
})

export default GameOverScreen