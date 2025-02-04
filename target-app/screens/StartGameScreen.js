import { Alert, StyleSheet, TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Card from '../components/Card'

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
            <Card>
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
            </Card>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
  startGameContainer: {
    marginTop: 50,
    marginHorizontal: 30
  },
  numberInput: {
    alignSelf: 'center',
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    color: Colors.primary500,
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