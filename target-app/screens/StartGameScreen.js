import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'

function StartGameScreen({onNumberPicked}) {
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(newEnteredNumber) {
        setEnteredNumber(newEnteredNumber)
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number must be between 1 and 99',
                [{text: 'Ok', style: 'destructive', onPress: resetInputHandler}]
            )
            return
        }

        onNumberPicked(chosenNumber)
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    return (
        <View style={styles.startGameContainer}>
            <TextInput
                    style={styles.numberInput}
                    inputMode='decimal'
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
  startGameContainer: {
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 30,
    backgroundColor: '#cc70ff',
    borderRadius: 16,
    elevation: 8, // shadow on android
    shadowColor: 'black', // shadow on ios
    shadowOffset: { width: 6, height: 4}, // shadow on ios
    shadowRadius: 4, // shadow on ios
    shadowOpacity: 0.4 // shadow on ios
  },
  numberInput: {
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
    color: 'orange',
    marginVertical: 8,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    flex: 1
  }
})