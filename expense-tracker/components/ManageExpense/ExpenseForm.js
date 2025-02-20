import { StyleSheet, Text, View } from "react-native"
import Input from "./Input"
import { useState } from "react";
import Button from "../ui/Button";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({defaultValues, submitButtonLabel, onSubmit, onCancel}) {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : ''
    })

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues(originalValues => {
            let newValue = enteredValue
            if (inputIdentifier === 'amount') {
                newValue = enteredValue.replaceAll(",", ".")
            }
            if (inputIdentifier === 'date') {
                const previousDateValueLength = originalValues.date.length
                const enteredValueLength = enteredValue.length
                const isDeleting = enteredValueLength < previousDateValueLength
                const isBeforeHyphen = enteredValueLength === 4 || enteredValueLength === 7
                if (isDeleting && isBeforeHyphen) {
                    newValue = enteredValue.substring(0, enteredValueLength - 1)
                } else if (!isDeleting && isBeforeHyphen) {
                    newValue = enteredValue + '-'
                }
            }
            return {
                ...originalValues,
                [inputIdentifier]: newValue
            }
        })
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        }
        onSubmit(expenseData)
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input style={styles.inputRowItem} label="Amount" textInputProps={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    value: inputValues.amount
                }} />
                <Input style={styles.inputRowItem} label="Date" textInputProps={{
                    placeholder: 'YYYY-MM-DD',
                    keyboardType: 'number-pad',
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputValues.date
                }}/>
            </View>
            <Input label="Description" textInputProps={{
                multiline: true,
                autoCorrect: true,
                autoCapitalize: 'sentences',
                onChangeText: inputChangedHandler.bind(this, 'description'),
                value: inputValues.description
            }}/>
            <View style={styles.buttonContainer}>
                <Button style={styles.buttonStyle} mode='flat' onPress={onCancel}>Cancel</Button>
                <Button style={styles.buttonStyle} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 14,
        textAlign: 'center'
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputRowItem: {
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
    buttonStyle: {
        flex: 1
    }
})

export default ExpenseForm