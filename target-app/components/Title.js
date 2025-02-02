import { StyleSheet, Text } from "react-native"
import Colors from "../constants/colors"

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.primary500,
        padding: 12,
        borderRadius: 20
    }
})

export default Title