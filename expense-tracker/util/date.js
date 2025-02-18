export function getFormattedDate(date) {
    let month = date.getMonth() + 1
    if (month < 10) {
        month = `0${month}`
    }
    return `${date.getFullYear()}-${month}-${date.getDate()}`
}