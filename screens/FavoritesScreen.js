import React, { useState } from 'react'
import { Text } from 'react-native'

export default function FavoritesScreen() {
    const [favorites, setFavorites] = useState([])

    return (
        <>
            {
                favorites.length > 0
                    ? <Text>
                        'ok'
                    </Text>
                    :
                    <Text>
                        'no favorites'
                    </Text>
            }
        </>

    )
}
