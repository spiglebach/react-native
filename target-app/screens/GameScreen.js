import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View>
                <Text>Lower or Higher?</Text>
                <Text>+ -</Text>
            </View>
            <View>
                <Text>Log rounds</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 50,
        padding: 30
    }
})

export default GameScreen