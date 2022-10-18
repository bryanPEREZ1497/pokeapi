import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, ScrollView } from 'react-native';


import { FavoritesContext } from '../context/FavoritesContext';
import { List } from 'react-native-paper';
import FavoriteButton from '../components/FavoriteButton';
import { useNavigation } from '@react-navigation/native';


export default function FavoritesScreen() {
    const { favoritesState, addFavorite, removeFavorite } = useContext(FavoritesContext)
    const navigation = useNavigation();

    useEffect(() => {
        console.log(favoritesState, 'keee')
    }, [favoritesState])

    return (
        <ScrollView>
            {
                favoritesState.length > 0
                    ?
                    (<List.Section>
                        {
                            favoritesState.map((item) => {
                                return (
                                    <List.Item
                                        key={item.id}
                                        title={item.name}
                                        left={() => <Image
                                            source={{ uri: item.sprites?.other.dream_world.front_default }}
                                            style={{
                                                width: 50,
                                                height: 50,
                                            }} />}
                                        right={() => <FavoriteButton favorite={item} />}
                                        style={{ marginVertical: 5, borderBottomColor: 'black', borderBottomWidth: 1 }}
                                        onPress={() => navigation.navigate('DetailsScreen', { ...item })}
                                    />
                                )
                            })

                        }


                    </List.Section>)
                    :
                    <Text>
                        no favorites
                    </Text>
            }
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: 'black'

    }
});