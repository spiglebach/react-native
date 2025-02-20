import { Alert, StyleSheet, Text, View } from "react-native"
import Input from "./Input"
import { useState } from "react";
import Button from "../ui/Button";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({defaultValues, submitButtonLabel, onSubmit, onCancel}) {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        },
    })

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputs(originals => {
            let newValue = enteredValue
            if (inputIdentifier === 'amount') {
                newValue = enteredValue.replaceAll(",", ".")
            }
            if (inputIdentifier === 'date') {
                const previousDateValueLength = originals.date.value.length
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
                ...originals,
                [inputIdentifier]: {value: newValue, isValid: true}
            }
        })
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date'
        const descriptionIsValid = expenseData.description.trim().length > 0

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // Alert.alert('Invalid input', 'Please check your input values')
            setInputs(originals => {
                return {
                    amount: {
                        value: originals.amount.value,
                        isValid: amountIsValid
                    },
                    date: {
                        value: originals.date.value,
                        isValid: dateIsValid
                    },
                    description: {
                        value: originals.description.value,
                        isValid: descriptionIsValid
                    }
                }
            })
            return
        }

        onSubmit(expenseData)
    }

    const formInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid
    let errorText
    if (formInvalid) {
        errorText = <Text style={styles.errortext}>Your form is invalid. Check your inputs!</Text>
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input style={styles.inputRowItem} label="Amount"
                    invalid={!inputs.amount.isValid}
                    textInputProps={{
                        placeholder: '9.99',
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputs.amount.value
                    }} />
                <Input style={styles.inputRowItem} label="Date"
                    invalid={!inputs.date.isValid}
                    textInputProps={{
                        placeholder: 'YYYY-MM-DD',
                        keyboardType: 'number-pad',
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputs.date.value
                    }}/>
            </View>
            <Input label="Description"
                invalid={!inputs.description.isValid}
                textInputProps={{
                    placeholder: 'Chocolate',
                    multiline: true,
                    autoCorrect: true,
                    autoCapitalize: 'sentences',
                    onChangeText: inputChangedHandler.bind(this, 'description'),
                    value: inputs.description.value
                }}/>
            {errorText}
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
        flex: 1,
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
        gap: 20,
        marginTop: 10
    },
    buttonStyle: {
        flex: 1
    },
    errortext: {
        textAlign: 'center',
        color: 'firebrick'
    }
})

export default ExpenseForm