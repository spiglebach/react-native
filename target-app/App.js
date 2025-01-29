import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
    const [pickedNumber, setPickedNumber] = useState()

    function numberPickedHandler(number) {
        setPickedNumber(number)
    }

    let screen = <StartGameScreen onNumberPicked={numberPickedHandler} />
    if (pickedNumber) {
        screen = <GameScreen pickedNumber={pickedNumber} />
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
