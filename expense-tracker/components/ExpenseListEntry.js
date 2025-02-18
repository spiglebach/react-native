import { Pressable, StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../constants/styles"
import { getFormattedDate } from "../util/date"
import { useNavigation } from '@react-navigation/native'

function ExpenseListEntry({expense}) {
    const navigation = useNavigation()
    function handleNavigation() {
        navigation.navigate('ManageExpense', {
            expenseId: expense.id
        })
    }
    return (
        <Pressable
            android_ripple={{color: '#ccc'}}
            style={({pressed}) => pressed ? {opacity: 0.75} : null}
            onPress={handleNavigation}
            >
            <View style={styles.expenseContainer}>
                <View>
                    <Text style={[styles.generalText, styles.description]}>{expense.description}</Text>
                    <Text style={styles.generalText}>{getFormattedDate(expense.date)}</Text>
                </View>
                <View>
                    <Text style={styles.amountText}>${expense.amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    expenseContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 8,
        padding: 8,
        backgroundColor: GlobalStyles.colors.expenseItemBackgroundColor,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        elevation: 3,
        shadowColor: 'black',
        shadowRadius: 4,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4
    },
    amountText: {
        fontWeight: 'bold',
        fontSize: 16,
        minWidth: 70
    },
    generalText: {
        paddingVertical: 2,
        paddingHorizontal: 4
    },
    description: {
        fontSize: 18
    }
})

export default ExpenseListEntry