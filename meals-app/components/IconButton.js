import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'

function IconButton({icon, color, onPress}) {
    return (
        <Pressable
                android_ripple={{color: "#ccc"}}
                onPress={onPress}
                style={({pressed}) => [styles.iconButton, pressed ? styles.pressed : null]}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {

    },
    pressed: {
        opacity: 0.5
    }
})

export default IconButton