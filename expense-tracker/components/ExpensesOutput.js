import { StyleSheet, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList expenses={expenses} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ExpensesOutput