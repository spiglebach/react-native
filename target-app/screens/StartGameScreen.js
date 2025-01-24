import { StyleSheet, Text, TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
    return (
        <View style={styles.startGameContainer}>
            <TextInput style={styles.numberInput}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
  startGameContainer: {
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
    fontWeight: 'bold',
    textAlign: 'center'
  }
})