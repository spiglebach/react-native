import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, useWindowDimensions, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Card from '../components/Card'
import Title from '../components/Title'

function StartGameScreen({onNumberPicked}) {
    const [enteredNumber, setEnteredNumber] = useState('')
    const {width, height} = useWindowDimensions()

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

    const marginTop = height < 380 ? 25 : 50

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position">
                <View style={[styles.startGameContainer, {marginTop: marginTop}]}>
                    <Card>
                        <Title>Input a number between 1 and 99</Title>
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
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
  startGameContainer: {
    marginHorizontal: 10
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