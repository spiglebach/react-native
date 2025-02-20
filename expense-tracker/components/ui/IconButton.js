import { Pressable, StyleSheet, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'

function IconButton({icon, size, color, onPress}) {
    return (
        <Pressable
            android_ripple={{color: '#ccc'}}
            style={({pressed}) => pressed && styles.pressed}
            onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} size={size} color={color}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 8,
        padding: 8,
        marginHorizontal: 12,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    }
})

export default IconButton