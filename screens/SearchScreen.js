import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import PokemonDetailComponent from '../components/PokemonDetailComponent';

export default function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (searchQuery) {
                fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`)
                    .then(response => response.json())
                    .then(JsonResponse => {
                        setPokemon(JsonResponse);
                    })
                    .catch(error => console.log(error));
            }
        }, 1000);
        return () => clearTimeout(debounce);
    }, [searchQuery])

    const onChangeSearch = query => {
        setSearchQuery(query);
    };

    return (
        <ScrollView>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            {
                pokemon
                    ? <PokemonDetailComponent pokemon={pokemon} />
                    : <View style={styles.container}>
                        <Image
                            style={styles.images}
                            source={require('../assets/pokeball.png')}
                        />
                        <Text style={styles.texto}>Search for a Pokemon</Text>
                    </View>
            }
        </ScrollView>
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
        width: 300,
        height: 300,
        // margin: 5,
        // alignSelf: 'center',
        // borderRadius: 3
    },
    texto: {
        // paddingTop: 30,
        // margin: 5
        fontSize: 20
    },
});