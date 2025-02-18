import { StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../constants/styles"

function ExpensesSummary({expenses, periodName}) {
    const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    return (
        <View style={styles.container}>
            <Text style={styles.periodNameText}>{periodName}</Text>
            <Text style={styles.amountText}>${expensesSum.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginBottom: 10,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: GlobalStyles.colors.summaryBackgroundColor,
    },
    periodNameText: {
        fontSize: 18,
        color: GlobalStyles.colors.highlightedTextColor
    },
    amountText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: GlobalStyles.colors.highlightedTextColor
    }
})

export default ExpensesSummary