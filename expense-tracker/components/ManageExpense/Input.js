import { StyleSheet, Text, TextInput, View } from "react-native"

function Input({label, style, textInputProps}) {
    let inputStyles = [styles.input]
    if (textInputProps && textInputProps.multiline) {
        inputStyles.push(styles.inputMultiline)
    }
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        fontSize: 12,
        marginBottom: 4
    },
    input: {
        backgroundColor: 'seashell',
        padding: 6,
        borderRadius: 8,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 60,
        textAlignVertical: 'top'
    }
})

export default Input