import { StyleSheet, Text } from "react-native"
import Colors from "../constants/colors"

function Subtitle({children}) {
    return (
        <Text style={styles.subtitle}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        width: '80%',
        marginHorizontal: 'auto',
        fontFamily: 'open-sans',
        fontSize: 18,
        color: Colors.primary500,
        textAlign: 'center',
        borderBottomWidth: 0,
        padding: 6,
    }
})

export default Subtitle