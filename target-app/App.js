import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
    const [pickedNumber, setPickedNumber] = useState()
    const [isGameOver, setGameOver] = useState(false)
    const [numberOfGuesses, setNumberOfGuesses] = useState(0)
    
    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    function numberPickedHandler(number) {
        setPickedNumber(number)
    }

    function gameOverHandler(numberOfRounds) {
        setNumberOfGuesses(numberOfRounds)
        setGameOver(true)
    }

    function startNewGameHandler() {
        setGameOver(false)
        setPickedNumber(null)
        setNumberOfGuesses(0)
    }

    let screen = <StartGameScreen onNumberPicked={numberPickedHandler} />
    if (isGameOver) {
        screen = <GameOverScreen numberOfRounds={numberOfGuesses} pickedNumber={pickedNumber} onStartNewGame={startNewGameHandler} />
    } else if (pickedNumber) {
        screen = <GameScreen pickedNumber={pickedNumber} onGameOver={gameOverHandler} />
    }

    return (
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.root}>
            <ImageBackground
                    source={require('./assets/images/background.png')}
                    resizeMode='cover'
                    style={styles.root}
                    imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.root}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.15
    }
});
