import { Alert, Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { Ionicons } from '@expo/vector-icons'
import Subtitle from "../components/Subtitle";
import Card from "../components/Card";
import GuessHistoryItem from "../components/GuessHistoryItem";

function generateRandomNumberBetween(min, max, exclude) {
    if (min === max) {
        return min
    }
    const randomNumber = Math.floor(Math.random() * (max - min)) + min

    console.log(`Randomnumber is: ${randomNumber}`);
    console.log(`Exclude is: ${exclude}`);
    if (randomNumber === exclude) {
        return generateRandomNumberBetween(min, max, exclude)
    } else {
        return randomNumber
    }
}

let minimumGuess = 1
let maximumGuess = 100

const deviceDimensions = Dimensions.get('window')

function GameScreen({pickedNumber, onGameOver}) {
    const [guess, setGuess] = useState()
    const [guessHistory, setGuessHistory] = useState([])

    useEffect(() => {
        const initialGuess = generateRandomNumberBetween(minimumGuess, maximumGuess, pickedNumber)
        console.log(`Initial guess is ${initialGuess}`)
        setGuess(initialGuess)
    }, [])

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
        const newGuess = generateRandomNumberBetween(minimumGuess, maximumGuess, guess)
        setGuess(newGuess)
    }

    useEffect(() => {
        if (!guess) {
            return
        }
        if (guess === pickedNumber) {
            console.log("Game over, match found!")
            onGameOver(guessHistory.length + 1)
            return
        } else {
            setGuessHistory(previousGuessHistory => [guess, ...previousGuessHistory])
        }
    }, [guess])

    useEffect(() => {
        minimumGuess = 1
        maximumGuess = 100
    }, [])

    return (
        <ScrollView style={styles.screen}>
            <Card style={{flex: 1}}>
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
                    <FlatList
                            data={guessHistory}
                            keyExtractor={(item, index) => `guess-${index}-${item}`}
                            renderItem={(itemData) => <GuessHistoryItem guessIndex={guessHistory.length - itemData.index} guess={itemData.item} />} />
                </View>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginHorizontal: 10,
        flex: 1
    },
    guessContainer: {
        alignItems: 'center'
    },
    guessText: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: deviceDimensions.width < 450 ? 30 : 44,
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
        marginTop: 20,
        padding: 16
    }
})

export default GameScreen