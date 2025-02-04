import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import Subtitle from "../components/Subtitle";

function generateRandomNumberBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min

    if (exclude && randomNumber === exclude) {
        return generateRandomNumberBetween(min, max, exclude)
    } else {
        return randomNumber
    }
}

let minimumGuess = 1
let maximumGuess = 100

function GameScreen({pickedNumber, onGameOver}) {
    const [guess, setGuess] = useState(generateRandomNumberBetween(minimumGuess, maximumGuess, pickedNumber))
    const [guessHistory, setGuessHistory] = useState([])

    function nextGuessHandler(direction) { // direction: 'lower' or 'higher'
        if ((direction === 'lower' && guess < pickedNumber) || (direction === 'higher' && guess > pickedNumber)) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                {text: 'Sorry!', style: 'cancel'}
            ])
            return
        }
        if (direction === 'lower') {
            maximumGuess = guess
        } else if (direction === 'higher') {
            minimumGuess = guess + 1
        }
        setGuessHistory(previousGuessHistory => [...previousGuessHistory, guess])
        setGuess(generateRandomNumberBetween(minimumGuess, maximumGuess))
            
    }

    useEffect(() => {
        if (guess === pickedNumber) {
            console.log("Game over, match found!")
            onGameOver()
        }
    }, [guess])


    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View style={styles.guessContainer}>
                <Text style={styles.guessText}>{guess}</Text>
            </View>
            <View>
                <Subtitle>Lower or Higher?</Subtitle>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>Lower</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>Higher</PrimaryButton>
                </View>
            </View>
            <View style={styles.historyContainer}>
                <Subtitle>Guess history</Subtitle>
                {guessHistory.map((historicalGuess, index) => {
                    return (
                        <Text key={`guess-${index}`} style={styles.guessHistoryText}>Guess #{index + 1}: {historicalGuess}</Text>
                    )
                })}
            </View>
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
    guessContainer: {
        alignItems: 'center'
    },
    guessText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 12
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 10
    },
    historyContainer: {
        marginTop: 20
    },
    guessHistoryText: {
        padding: 6,
        textAlign: 'center'
    }
})

export default GameScreen