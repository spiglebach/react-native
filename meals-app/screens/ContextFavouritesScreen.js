import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourites-context";
import { StyleSheet, Text, View } from "react-native";

function ContextFavouritesScreen() {
    const favouriteMealsContext = useContext(FavouritesContext)
    const meals = MEALS.filter(meal => favouriteMealsContext.ids.includes(meal.id))

    if (favouriteMealsContext.ids.length <= 0) {
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

export default ContextFavouritesScreen