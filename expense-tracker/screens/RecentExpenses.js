import ExpensesOutput from "../components/ExpensesOutput"
import { EXPENSES } from "../data/dummy-data"

function RecentExpensesScreen() {
    return (
        <ExpensesOutput expenses={EXPENSES} expensesPeriod="Last 7 Days" />
    )
}

export default RecentExpensesScreen