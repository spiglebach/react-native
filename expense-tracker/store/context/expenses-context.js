import { createContext, useReducer } from "react"
import Expense from "../../models/expense"
import { EXPENSES } from "../../data/dummy-data"

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    updateExpense: (id, {description, amount, date}) => {},
    removeExpense: (id) => {}
})

function expensesReducer(state, action) {
    switch(action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            const newExpense = new Expense(id, action.payload.description, action.payload.amount, action.payload.date)
            return [newExpense, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id)
            const updatableExpense = state[updatableExpenseIndex]
            const updatedItem = { ...updatableExpense, ...action.payload.data }
            const updatedExpenses = [...state]
            updatedExpenses[updatableExpenseIndex] = updatedItem
            return updatedExpenses
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state
    }
}

function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] = useReducer(expensesReducer, EXPENSES)

    function addExpense(expenseData) {
        dispatch({type: 'ADD', payload: expenseData})
    }

    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: id})
    }

    function updateExpense(id, expenseData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider