import { StyleSheet, View, Text } from "react-native"

function GuessHistoryItem({guessIndex, guess}) {
    return (
        <View style={styles.guessHistoryContainer}>
            <Text style={styles.guessIndex}>Guess #{guessIndex}:</Text>
            <Text style={styles.guessHistoryText}>{guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    guessHistoryContainer: {
        marginVertical: 5,
        flexDirection: 'row',
        backgroundColor: 'wheat',
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center',
        gap: 10
    },
    guessIndex: {
        textAlign: 'center',
        fontSize: 16
    },
    guessHistoryText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default GuessHistoryItem