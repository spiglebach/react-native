import { StyleSheet, Text, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"

function ExpensesOutput({expenses, expensesPeriod}) {
    let content = expenses.length <= 0 ? (
        <Text style={{textAlign: 'center', marginVertical: 'auto'}}>No expenses...</Text>
     ) : (
        <ExpensesList expenses={expenses} />
     )
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ExpensesOutput