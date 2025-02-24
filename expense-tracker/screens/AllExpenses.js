import { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput'
import { ExpensesContext } from '../store/context/expenses-context'

function AllExpensesScreen() {
    const {expenses} = useContext(ExpensesContext)

    return (
        <ExpensesOutput expenses={expenses} expensesPeriod="Total" />
    )
}

export default AllExpensesScreen