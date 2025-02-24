import {StyleSheet, Text, View} from 'react-native'
import Button from './Button'

function ErrorOverlay({message, onConfirm}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An error occurred!</Text>
            <Text style={[styles.text, styles.message]}>{message}</Text>
            <Button onPress={onConfirm}>Okay</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    text: {
        textAlign: 'center',
        color: 'firebrick',
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14
    }
})

export default ErrorOverlay