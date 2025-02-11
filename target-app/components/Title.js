import { Platform, StyleSheet, Text } from "react-native"
import Colors from "../constants/colors"

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: Platform.select({ios: 20, android: 18}),
        color: Colors.primary500,
        textAlign: 'center',
        borderWidth: Platform.OS === 'ios' ? 0 : 2,
        borderColor: Colors.primary500,
        padding: 12,
        borderRadius: 20,
        maxWidth: '80%'
    }
})

export default Title