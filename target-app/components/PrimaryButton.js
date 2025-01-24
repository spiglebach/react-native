import { Pressable, Text, View } from "react-native"

function PrimaryButton({children}) {
    return (
        <Pressable>
            <View>
                <Text>{children}</Text>
            </View>
        </Pressable>
    )
}

export default PrimaryButton