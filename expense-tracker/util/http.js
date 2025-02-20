import axios from 'axios'

const BACKEND_URL = 'http://192.168.1.153:8080'

export async function httpAddExpense(expenseData) {
    const response = await axios.post(`${BACKEND_URL}/expenses`, expenseData)
    const id = response.data.id.toString()
    return id
}

export async function httpGetExpenses() {
    const response = await axios.get(`${BACKEND_URL}/expenses`)
    const expenses = []
    for (const index in response.data) {
        const expenseObject = {
            id: response.data[index].id.toString(),
            amount: response.data[index].amount,
            date: new Date(response.data[index].date),
            description: response.data[index].description
        }
        console.log(expenseObject);
        expenses.push(expenseObject)
    }
    return expenses
}

export function httpUpdateExpense(id, expenseData) {
    return axios.put(`${BACKEND_URL}/expenses/${id}`, expenseData)
}

export function httpDeleteExpense(id) {
    return axios.delete(`${BACKEND_URL}/expenses/${id}`)
}