import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        let apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchQuery}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(JsonResponse => {
                setPokemon(JsonResponse);
            })
            .catch(error => console.log(error));

    }, [searchQuery])


    const onChangeSearch = query => setSearchQuery(query);

    return (
        <>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Image
                style={{
                    width: 400,
                    height: 200,
                }}
                source={{ uri: pokemon.sprites?.other.dream_world.front_default }} />

            <Text>
                {pokemon.name}
            </Text>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    images: {
        width: 125,
        height: 250,
        margin: 5,
        alignSelf: 'center',
        borderRadius: 3
    },
    texto: {
        paddingTop: 30,
        margin: 5
    },
});