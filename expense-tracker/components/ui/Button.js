import { Pressable, StyleSheet, Text, View } from "react-native"

function Button({children, onPress, mode, style}) {
    return (
        <View style={style}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => pressed && {opacity: 0.75}}
                onPress={onPress}
                >
                <View style={[styles.button, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: 'rebeccapurple'
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    flatText: {
        color: 'rebeccapurple'
    }
})

export default Button