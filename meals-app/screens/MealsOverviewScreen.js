import { FlatList, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"

function MealsOverviewScreen({ navigation, route }) { // useRoute() hook can be used
    const categoryId = route.params.categoryId
    const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0)

    function renderMealItem(itemData) {
        return (
            <MealItem
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
            />
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