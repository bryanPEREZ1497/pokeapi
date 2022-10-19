import React, { createContext, useEffect, useReducer, useState } from "react";
import FavoritesReducer, { actionTypes } from "./FavoritesReducer";

export const FavoritesContext = createContext([]);



export default function FavoritesProvider({ children }) {
    // const [favorites, setFavorites] = useState([]);
    const [favoritesState, dispatch] = useReducer(FavoritesReducer, [])

    const addFavorite = (pokemon) => {
        // setFavorites([...favorites, pokemon]);
        dispatch({ type: actionTypes.ADD_FAVORITE, payload: pokemon })
    };

    const removeFavorite = (pokemon) => {
        // setFavorites(favorites.filter((fav) => fav.id !== pokemon.id));
        dispatch({ type: actionTypes.REMOVE_FAVORITE, payload: pokemon })
    };

    const isFavorite = (id) => {
        // return favorites.some((fav) => fav.id === id);
        return favoritesState.some((fav) => fav.id === id);
    };

    return (
        <FavoritesContext.Provider
            value={{
                favoritesState,
                addFavorite,
                removeFavorite,
                isFavorite
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

