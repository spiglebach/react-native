import { FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"
import { useLayoutEffect } from "react"

function MealsOverviewScreen({ navigation, route }) { // useRoute() hook can be used
    const categoryId = route.params.categoryId
    const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0)

    useLayoutEffect(() => { // does not run after rendering
        const category = CATEGORIES.find(category => category.id === categoryId)
        navigation.setOptions({
            title: category.title
        })
    }, [categoryId, navigation])

    function renderMealItem(itemData) {
        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }
        return (
            <MealItem {...mealItemProps}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={meals}
                keyExtractor={meal => meal.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealsOverviewScreen