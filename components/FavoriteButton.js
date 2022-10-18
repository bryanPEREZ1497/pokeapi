import React, { useEffect, useState, useContext, } from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { FavoritesContext } from '../context/FavoritesContext';

const iconNames = {
    isFavorite: 'cards-heart',
    isNotFavorite: 'cards-heart-outline'
}

export default function FavoriteButton({ favorite }) {
    const { favoritesState, addFavorite, removeFavorite } = useContext(FavoritesContext)
    const [iconName, setIconName] = useState('')

    useEffect(() => {
        const favoriteEncountered = favoritesState.find((fav) => fav.id === favorite.id);
        if (favoriteEncountered) {
            setIconName(iconNames.isFavorite)
            return
        }
        setIconName(iconNames.isNotFavorite)
    }, [favoritesState])

    return (
        <MaterialCommunityIcons
            color='red'
            name={iconName}
            size={26}
            onPress={() => {
                if (!favoritesState.find(fav => fav.id === favorite.id)) {
                    setIconName(iconNames.isFavorite)
                    addFavorite(favorite)
                }
                else {
                    setIconName(iconNames.isNotFavorite)
                    removeFavorite(favorite)
                }
            }} />
    )
}