import { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/ui/IconButton'
import { GlobalStyles } from '../constants/styles'

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

    const deleteButton = isEditing && (
        <View style={styles.deleteButtonContainer}>
            <IconButton icon="trash" size={36} color={GlobalStyles.colors.deleteButtonColor} onPress={deleteExpenseHandler} />
        </View>
    )

    return (
        <View style={styles.container}>
            {isEditing && <Text>expenseId: {expenseId}</Text>}
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
        marginTop: 'auto',
        marginBottom: 24,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.deleteButtonColor,
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: 'lightpink'
    }
})

export default ManageExpenseScreen