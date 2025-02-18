import { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/ui/IconButton'
import { GlobalStyles } from '../constants/styles'
import Button from '../components/ui/Button'

function ManageExpenseScreen({navigation, route}) {
    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Manage Expense' : 'New Expense'
        })
    }, [expenseId, navigation])

    function deleteExpenseHandler() {

    }

    function cancelHandler() {

    }

    function confirmHandler() {

    }

    const deleteButton = isEditing && (
        <View style={styles.deleteButtonContainer}>
            <IconButton icon="trash" size={24} color={GlobalStyles.colors.deleteButtonColor} onPress={deleteExpenseHandler} />
        </View>
    )

    return (
        <View style={styles.container}>
            {isEditing && <Text>expenseId: {expenseId}</Text>}
            <View style={styles.buttonContainer}>
                <Button style={styles.buttonStyle} mode='flat' onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.buttonStyle} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            { deleteButton }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.screenBackgroundColor
    },
    buttonContainer: {
        marginTop: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
    buttonStyle: {
        flex: 1
    },
    deleteButtonContainer: {
        marginTop: 24,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.deleteButtonColor,
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'lightpink'
    }
})

export default ManageExpenseScreen