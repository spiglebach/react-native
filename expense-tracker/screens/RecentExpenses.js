import { useContext, useEffect } from "react"
import ExpensesOutput from "../components/ExpensesOutput"
import { ExpensesContext } from "../store/context/expenses-context"
import { getDateMinusDays } from "../util/date"
import { httpGetExpenses } from "../util/http"

function RecentExpensesScreen() {
    const {expenses, setExpenses} = useContext(ExpensesContext)

    useEffect(() => {
        async function getExpenses() {
            const expensesResponse = await httpGetExpenses()
            setExpenses(expensesResponse)
            // setFetchedExpenses(expensesResponse)
        }
        getExpenses()
    }, [])

    const  recentExpenses = expenses.filter((expense) => {
        const today = new Date()
        const sevenDaysAgo = getDateMinusDays(today, 7)
        return (expense.date >= sevenDaysAgo) && (expense.date <= today)
    })
    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
    )
}

export default RecentExpensesScreen