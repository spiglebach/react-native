import ExpensesOutput from '../components/ExpensesOutput'
import { EXPENSES } from '../data/dummy-data'

function AllExpensesScreen() {
    return (
        <ExpensesOutput expenses={EXPENSES} expensesPeriod="Total" />
    )
}

export default AllExpensesScreen