import MealsList from "../components/MealsList"
import { CATEGORIES, MEALS } from "../data/dummy-data"
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

    return <MealsList meals={meals} />
}

export default MealsOverviewScreen