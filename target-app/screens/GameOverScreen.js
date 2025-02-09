import { Image, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Card from "../components/Card"
import Colors from "../constants/colors"
import PrimaryButton from "../components/PrimaryButton"

function GameOverScreen({pickedNumber}) {
    return (
        <View style={styles.screen}>
            <Card style={styles.cardOverride}>
                <Title>Game Over!</Title>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/images/success.png')}/>
                </View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>X</Text> round to guess the number <Text style={styles.highlightText}>{pickedNumber}</Text></Text>
                <PrimaryButton>Start New Game</PrimaryButton>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 50,
        marginHorizontal: 10
    },
    cardOverride: {
        backgroundColor: 'orange'
    },
    imageContainer: {
        marginVertical: 20,
        marginHorizontal: 'auto',
        borderRadius: '50%',
        width: 200,
        height: 200,
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