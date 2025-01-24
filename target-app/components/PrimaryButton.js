import { Pressable, StyleSheet, Text, View } from "react-native"

function PrimaryButton({children}) {
    function onPress() {
        console.log("Pressed!")
    }

    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#104909',
        borderRadius: 24,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})