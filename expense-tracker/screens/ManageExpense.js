import { useContext, useLayoutEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/ui/IconButton'
import { GlobalStyles } from '../constants/styles'
import { ExpensesContext } from '../store/context/expenses-context'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'

function ManageExpenseScreen({navigation, route}) {
    const expenseId = route.params?.expenseId
    const {expenses, deleteExpense, addExpense, updateExpense} = useContext(ExpensesContext)
    const isEditing = !!expenseId

    const editedExpense = expenses.find(expense => expense.id === expenseId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Manage Expense' : 'New Expense'
        })
    }, [expenseId, navigation])

    function deleteExpenseHandler() {
        deleteExpense(expenseId)
        navigation.goBack()
    }

    function cancelHandler() {
        navigation.goBack()
    }

    function confirmHandler(expenseData) {
        if  (isEditing) {
            updateExpense(expenseId, expenseData)
        } else {
            addExpense(expenseData)
        }
        navigation.goBack()
    }

    const deleteButton = isEditing && (
        <Pressable style={({pressed}) => [styles.deleteButtonContainer, pressed && {opacity: 0.75}]} onPress={deleteExpenseHandler}>
            <IconButton icon="trash" size={24} color={GlobalStyles.colors.deleteButtonColor} />
        </Pressable>
    )

    return (
        <View style={styles.container}>
            {isEditing && <Text>expenseId: {expenseId}</Text>}
            <ExpenseForm
                defaultValues={editedExpense}
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
                onSubmit={confirmHandler}
                onCancel={cancelHandler}/>
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
    deleteButtonContainer: {
        height: 50,
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