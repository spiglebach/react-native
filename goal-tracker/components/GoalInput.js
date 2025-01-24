import { useState } from "react"
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native"


function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('') 

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        props.onCancel()
    }

    function cancelAddGoalHandler() {
        setEnteredGoalText('')
        props.onCancel()
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/favicon.png')} />
                <TextInput
                    placeholderTextColor='#6699aa'
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler} 
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' color='#0f00f0' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' color='red' onPress={cancelAddGoalHandler} />
                    </View>
                    
                </View>
            </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#FF9F5F'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        width: '40%',
        marginHorizontal: 4
    },
    textInput: {
        backgroundColor: '#cccccc',
        color: '#5500f0',
        borderWidth: 1,
        borderColor: '#0f00f0',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})

export default GoalInput