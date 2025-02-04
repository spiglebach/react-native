import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
    const [pickedNumber, setPickedNumber] = useState()
    const [isGameOver, setGameOver] = useState(false)

    function numberPickedHandler(number) {
        setPickedNumber(number)
    }

    function gameOverHandler() {
        setGameOver(true)
    }

    let screen = <StartGameScreen onNumberPicked={numberPickedHandler} />
    if (isGameOver) {
        screen = <GameOverScreen pickedNumber={pickedNumber} />
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
