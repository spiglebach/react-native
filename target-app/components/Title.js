import { StyleSheet, Text } from "react-native"

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#acf200',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#acf200',
        padding: 12,
        borderRadius: 20
    }
})

export default Title