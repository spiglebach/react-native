import { Text } from 'react-native'

function ManageExpenseScreen({navigation, route}) {
    const expenseId = route.params?.expenseId
    if (expenseId) {
        return (
            <Text>Manage Expense (id: {expenseId})</Text>
        )
    }
    return (
        <Text>New Expense</Text>
    )
}

export default ManageExpenseScreen