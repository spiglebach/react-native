import { useLayoutEffect } from 'react'
import { Text } from 'react-native'

function ManageExpenseScreen({navigation, route}) {
    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Manage Expense' : 'New Expense'
        })
    }, [expenseId, navigation])

    if (isEditing) {
        return (
            <Text>Manage Expense (id: {expenseId})</Text>
        )
    }
    return (
        <Text>New Expense</Text>
    )
}

export default ManageExpenseScreen