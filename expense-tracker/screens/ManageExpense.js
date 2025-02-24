import { useContext, useLayoutEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/ui/IconButton'
import { GlobalStyles } from '../constants/styles'
import { ExpensesContext } from '../store/context/expenses-context'
import ExpenseForm from '../components/ManageExpense/ExpenseForm'
import { httpAddExpense, httpDeleteExpense, httpUpdateExpense } from '../util/http'
import LoadingOverlay from '../components/ui/LoadingOverlay'

function ManageExpenseScreen({navigation, route}) {
    const [isSubmitting, setIsSubmitting] = useState(false)
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
        setIsSubmitting(true)
        deleteExpense(expenseId)
        httpDeleteExpense(expenseId)
        navigation.goBack()
    }

    function cancelHandler() {
        navigation.goBack()
    }

    async function confirmHandler(expenseData) {
        setIsSubmitting(true)
        if  (isEditing) {
            updateExpense(expenseId, expenseData)
            await httpUpdateExpense(expenseId, expenseData)
        } else {
            const id = await httpAddExpense(expenseData)
            addExpense({id: id, ...expenseData})
        }
        navigation.goBack()
    }

    if (isSubmitting) {
        return <LoadingOverlay />
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