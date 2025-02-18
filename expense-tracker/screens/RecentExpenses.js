import { useContext } from "react"
import ExpensesOutput from "../components/ExpensesOutput"
import { ExpensesContext } from "../store/context/expenses-context"
import { getDateMinusDays } from "../util/date"

function RecentExpensesScreen() {
    const {expenses} = useContext(ExpensesContext)
    const  recentExpenses = expenses.filter((expense) => {
        const today = new Date()
        const sevenDaysAgo = getDateMinusDays(today, 7)
        return expense.date > sevenDaysAgo
    })
    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
    )
}

export default RecentExpensesScreen