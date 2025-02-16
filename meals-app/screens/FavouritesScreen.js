import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourites-context";

function FavouritesScreen() {
    const favouriteMealsContext = useContext(FavouritesContext)
    const meals = MEALS.filter(meal => favouriteMealsContext.ids.includes(meal.id))
    return (
        <MealsList meals={meals} />
    )
}

export default FavouritesScreen