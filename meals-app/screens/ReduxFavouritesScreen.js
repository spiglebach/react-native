import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function ReduxFavouritesScreen() {
    const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids)
    const meals = MEALS.filter(meal => favouriteMealIds.includes(meal.id))

    if (favouriteMealIds.length <= 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favourite meals yet.</Text>
            </View>
        )
    }
    return (
        <MealsList meals={meals} />
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'silver'
    }
})

export default ReduxFavouritesScreen