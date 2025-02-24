import { useContext, useEffect, useState } from "react"
import ExpensesOutput from "../components/ExpensesOutput"
import { ExpensesContext } from "../store/context/expenses-context"
import { getDateMinusDays } from "../util/date"
import { httpGetExpenses } from "../util/http"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import ErrorOverlay from "../components/ui/ErrorOverlay"

function RecentExpensesScreen() {
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState()
    const {expenses, setExpenses} = useContext(ExpensesContext)

    useEffect(() => {
        async function getExpenses() {
            setIsFetching(true)
            try {
                const expensesResponse = await httpGetExpenses()
                setExpenses(expensesResponse)
            } catch (e) {
                console.log(e)
                setError('Could not fetch expenses!')
            }
            setIsFetching(false)
            // setFetchedExpenses(expensesResponse)
        }
        getExpenses()
    }, [])

    function confirmErrorHandler() {
        setError(null)
    }

    if (error && !isFetching) {
        return <ErrorOverlay message={error} onConfirm={confirmErrorHandler} />
    }

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