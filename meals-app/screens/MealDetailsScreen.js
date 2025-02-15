import { Text, View } from "react-native"
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

    return (
        <View>
            <Text>{meal.title}</Text>
        </View>
    )
}

export default MealDetailsScreen