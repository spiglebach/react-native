import { Image, Pressable, StyleSheet, Text, View } from "react-native"

function MealItem({title, imageUrl}) {
    return (
        <View style={styles.mealItemContainer}>
            <Pressable
                    android_ripple={{color: '#ccc'}}
                    style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
                <View style={styles.innerContainer}>
                    <Image style={styles.mealImage} source={{
                        uri: imageUrl
                    }} />
                    <Text style={styles.mealTitle}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItemContainer: {
        flex: 1,
        backgroundColor: 'wheat',
        margin: 10,
        borderRadius: 12
    },
    mealImage: {
        width: '100%',
        objectFit: 'cover',
        height: 200,
        overflow: 'hidden',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    mealTitle: {
        marginVertical: 20,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
    }
})

export default MealItem