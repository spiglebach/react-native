import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native"
import Title from "../components/Title"
import Card from "../components/Card"
import Colors from "../constants/colors"
import PrimaryButton from "../components/PrimaryButton"

function GameOverScreen({numberOfRounds, pickedNumber, onStartNewGame}) {
    const {width, height} = useWindowDimensions()

    let imageSize = 300

    if (width < 380) {
        imageSize = 150
    }

    if (height < 400) {
        imageSize = 120
    }

    const imageConatinerStyles = {
        width: imageSize,
        height: imageSize,
    }

    return (
        <ScrollView>
            <Card style={styles.cardOverride}>
                <Title>Game Over!</Title>
                <View style={[styles.imageContainer, imageConatinerStyles]}>
                    <Image style={styles.image} source={require('../assets/images/success.png')}/>
                </View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{numberOfRounds}</Text> rounds to guess the number <Text style={styles.highlightText}>{pickedNumber}</Text></Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardOverride: {
        backgroundColor: 'orange'
    },
    imageContainer: {
        marginVertical: 20,
        marginHorizontal: 'auto',
        borderRadius: '50%',
        borderWidth: 3,
        borderColor: Colors.primary600,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 16,
        fontFamily: 'open-sans',
        color: Colors.primary500,
        textAlign: 'center',
        marginBottom: 24
    },
    highlightText: {
        fontFamily: 'open-sans-bold',
        color: 'maroon',
        fontSize: 18
    }
})

export default GameOverScreen