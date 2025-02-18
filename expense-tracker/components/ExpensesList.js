import { FlatList, StyleSheet } from "react-native"
import ExpenseListEntry from "./ExpenseListEntry"

function ExpensesList({expenses}) {
    return (
        <FlatList
            style={styles.container}
            data={expenses}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => <ExpenseListEntry expense={itemData.item} />}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ExpensesList