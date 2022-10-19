import React, { useContext, } from 'react'
import { View, StyleSheet, Text, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FavoritesContext } from '../context/FavoritesContext';
import FavoriteButton from '../components/FavoriteButton';

export default function FavoritesScreen() {
    const { favoritesState } = useContext(FavoritesContext)
    const navigation = useNavigation();

    return (
        <ScrollView>
            {
                favoritesState.length > 0
                    ?
                    (
                        <List.Section>
                            {
                                favoritesState.map((item) => {
                                    return (
                                        <Card
                                            elevation={2}
                                            style={{ marginVertical: 5, }}
                                            key={item.id}>
                                            <Card.Content>
                                                <List.Item
                                                    title={item.name}
                                                    left={() => <Image
                                                        source={{ uri: item.sprites?.other.dream_world.front_default }}
                                                        style={{
                                                            width: 50,
                                                            height: 50,
                                                        }} />}
                                                    right={() => <FavoriteButton favorite={item} />}
                                                    onPress={() => navigation.navigate('DetailsScreen', { ...item })}
                                                />
                                            </Card.Content>
                                        </Card>
                                    )
                                })
                            }
                        </List.Section>
                    )
                    :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Home')
                        }} >
                            <Icon name="heart-plus" size={100} color="red" />
                            <Text style={{ fontSize: 20 }}>No Favorites</Text>
                        </TouchableOpacity>
                    </View>
            }
        </ScrollView >

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