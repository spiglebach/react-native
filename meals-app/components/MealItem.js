import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"

function MealItem({title, imageUrl, duration, complexity, affordability}) {
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
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailText}>{duration}m</Text>
                    <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
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
        borderRadius: 12,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
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
        fontSize: 18,
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
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
        marginBottom: 14
    },
    detailText: {
        fontSize: 13
    }
})

export default MealItem