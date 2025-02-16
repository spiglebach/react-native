import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import { useContext, useLayoutEffect } from "react"
import IconButton from "../components/IconButton"
import { FavouritesContext } from "../store/context/favourites-context"

function MealDetailsScreen({route, navigation}) {
    const mealId = route.params.mealId
    const meal = MEALS.find(meal => meal.id === mealId)
    const favouriteMealsContext = useContext(FavouritesContext)
    const isFavourite = favouriteMealsContext.ids.includes(mealId)

    function headerButtonPressHandler() {
        if (isFavourite) {
            favouriteMealsContext.removeFavourite(mealId)
        } else {
            favouriteMealsContext.addFavourite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title,
            headerRight: () => {
                return (
                    <IconButton
                        icon={isFavourite ? "heart" : "heart-outline"}
                        color="silver"
                        onPress={headerButtonPressHandler}
                    />
                )
            }
        })
    }, [navigation, mealId, favouriteMealsContext])

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

    const hasAnyAccessibility = isGlutenFree || isVegan || isVegetarian || isLactoseFree
    let accessibilitySection
    if (hasAnyAccessibility) {
        accessibilitySection = (
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Accessibility:</Text>
                <View style={styles.sectionContent}>
                    {isGlutenFree ? <Text>gluten free</Text> : null}
                    {isVegan ? <Text>vegan</Text> : null}
                    {isVegetarian ? <Text>vegetarian</Text> : null}
                    {isLactoseFree ? <Text>lactose free</Text> : null}
                </View>
            </View>
        )
    }

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
                    {ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Steps:</Text>
                <View style={styles.sectionContent}>
                    {steps.map((step, index) => <Text key={index}>{index + 1}: {step}</Text>)}
                </View>
            </View>
            {accessibilitySection}
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
        padding: 14
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
        fontWeight: 'bold',
        fontSize: 16,
        margin: 6
    },
    sectionContent: {
        gap: 4
    }
})

export default MealDetailsScreen