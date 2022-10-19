import React, { useEffect, useState, useContext, } from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { FavoritesContext } from '../context/FavoritesContext';

const iconNames = {
    isFavorite: 'cards-heart',
    isNotFavorite: 'cards-heart-outline'
}

export default function FavoriteButton({ favorite }) {
    const { favoritesState, addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext)
    const [iconName, setIconName] = useState('')

    useEffect(() => {
        if (isFavorite(favorite.id)) {
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
                if (!isFavorite(favorite.id)) {
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