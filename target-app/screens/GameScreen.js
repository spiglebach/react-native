import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { Ionicons } from '@expo/vector-icons'
import Subtitle from "../components/Subtitle";
import Card from "../components/Card";

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
            <Card>
                <Title>Opponent's Guess</Title>
                <View style={styles.guessContainer}>
                    <Text style={styles.guessText}>{guess}</Text>
                </View>
                <View>
                    <Subtitle>Lower or Higher?</Subtitle>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size="24" />
                        </PrimaryButton>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            <Ionicons name="add" size="24" />
                        </PrimaryButton>
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
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 50,
        marginHorizontal: 30
    },
    guessContainer: {
        alignItems: 'center'
    },
    guessText: {
        fontFamily: 'open-sans-bold',
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