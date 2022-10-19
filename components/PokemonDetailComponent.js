import React, { useEffect, useState, useRef, useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FavoritesContext } from '../context/FavoritesContext';

import FavoriteButton from './FavoriteButton';


export default function PokemonDetailComponent({ pokemon }) {
    const { isFavorite } = useContext(FavoritesContext)
    return (
        <List.Section>
            <List.Item
                title={isFavorite(pokemon.id) ? 'Remove' : 'Add'}
                right={() => <FavoriteButton favorite={pokemon} />}
            />

            <List.Subheader>Sprites</List.Subheader>
            <View
            >
                <TouchableOpacity>
                    <Image
                        style={styles.images}
                        source={{ uri: pokemon?.sprites?.other.dream_world.front_default }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.images}
                        source={{ uri: pokemon?.sprites?.back_default }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.images}
                        source={{ uri: pokemon?.sprites?.front_default }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.images}
                        source={{ uri: pokemon?.sprites?.other.home.front_default }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.images}
                        source={{ uri: pokemon?.sprites?.other["official-artwork"]?.front_default }} />
                </TouchableOpacity>

            </View>
            <List.Subheader>Info</List.Subheader>

            <List.Item
                title={pokemon.name}
                left={() => <List.Icon color="#000" icon="folder" />}
            />
            <List.Item
                title={`${pokemon.weight} kg`}
                left={() => <List.Icon color="#000" icon="folder" />}
            />
            <List.Item
                title={`${pokemon.height} ft`}
                left={() => <List.Icon color="#000" icon="folder" />}
            />
            <List.Item
                title={pokemon.species?.name}
                left={() => <List.Icon color="#000" icon="folder" />}
            />
            <List.Subheader>Abilities</List.Subheader>
            {
                pokemon.abilities?.map((item, index) => {
                    return (
                        <List.Item
                            key={index}
                            title={item.ability.name}
                            left={() => <List.Icon color="#000" icon="folder" />}
                        />
                    )
                })
            }

        </List.Section>
    )
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
        margin: 5,
        alignSelf: 'center',
        borderRadius: 3
    },
    texto: {
        paddingTop: 30,
        margin: 5
    },
});