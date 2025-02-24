import { useContext, useEffect, useState } from "react"
import ExpensesOutput from "../components/ExpensesOutput"
import { ExpensesContext } from "../store/context/expenses-context"
import { getDateMinusDays } from "../util/date"
import { httpGetExpenses } from "../util/http"
import LoadingOverlay from "../components/ui/LoadingOverlay"

function RecentExpensesScreen() {
    const [isFetching, setIsFetching] = useState(true)
    const {expenses, setExpenses} = useContext(ExpensesContext)

    useEffect(() => {
        async function getExpenses() {
            setIsFetching(true)
            const expensesResponse = await httpGetExpenses()
            setExpenses(expensesResponse)
            setIsFetching(false)
            // setFetchedExpenses(expensesResponse)
        }
        getExpenses()
    }, [])

    if (isFetching) {
        return <LoadingOverlay />
    }

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