import { useContext, useEffect } from 'react'
import ExpensesOutput from '../components/ExpensesOutput'
import { ExpensesContext } from '../store/context/expenses-context'
import { httpGetExpenses } from '../util/http'

function AllExpensesScreen() {
    const {expenses, setExpenses} = useContext(ExpensesContext)

    useEffect(() => {
        async function getExpenses() {
            const expensesResponse = await httpGetExpenses()
            setExpenses(expensesResponse)
            // setFetchedExpenses(expensesResponse)
        }
        getExpenses()
    }, [])

    return (
        <ExpensesOutput expenses={expenses} expensesPeriod="Total" />
    )
}

export default AllExpensesScreen