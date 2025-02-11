import { StyleSheet, View } from "react-native"
import Colors from "../constants/colors"

function Card({children, style}) {
    return (
        <View style={[styles.card, style]}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 30,
        borderRadius: 20,
        padding: 30,
        backgroundColor: Colors.accent,
        elevation: 8, // shadow on android
        shadowColor: 'black', // shadow on ios
        shadowOffset: { width: 6, height: 4}, // shadow on ios
        shadowRadius: 4, // shadow on ios
        shadowOpacity: 0.4 // shadow on ios
    }
})

export default Card