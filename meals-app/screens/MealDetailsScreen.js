import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import { useLayoutEffect } from "react"

function MealDetailsScreen({route, navigation}) {
    const mealId = route.params.mealId
    const meal = MEALS.find(meal => meal.id === mealId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title
        })
    }, [navigation, mealId])

    const {
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
    } = meal

    return (
        <ScrollView style={styles.outerContainer}>
            <Image style={styles.image} source={{
                uri: imageUrl
            }} />
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.section, styles.quickDetails]}>
                <Text>{duration}m</Text>
                <Text>{affordability}</Text>
                <Text>{complexity}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Ingredients:</Text>
                <View style={styles.sectionContent}>
                    {ingredients.map(ingredient => <Text>{ingredient}</Text>)}
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Steps:</Text>
                <View style={styles.sectionContent}>
                    {steps.map((step, index) => <Text>{index + 1}: {step}</Text>)}
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Accessibility:</Text>
                <View style={styles.sectionContent}>
                    <Text>{isGlutenFree ? 'gluten free' : null}</Text>
                    <Text>{isVegan ? 'vegan' : null}</Text>
                    <Text>{isVegetarian ? 'vegetarian' : null}</Text>
                    <Text>{isLactoseFree ? 'lactose free' : null}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: 'wheat'
    },
    image: {
        width: '100%',
        height: 300,
        objectFit: 'fill'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 14
    },
    quickDetails: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 14
    },
    section: {
        marginTop: 14,
        paddingHorizontal: 14
    },
    sectionTitle: {
        textAlign: 'center',
        fontSize: 16
    },
    sectionContent: {
        gap: 4
    }
})

export default MealDetailsScreen