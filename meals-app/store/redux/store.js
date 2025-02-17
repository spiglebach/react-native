import { configureStore } from '@reduxjs/toolkit'
import faviouritesReducer from './favourites'

export const store = configureStore({
    reducer: {
        favouriteMeals: faviouritesReducer
    }
})