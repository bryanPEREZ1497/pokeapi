import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import DetailsScreen from '../screens/DetailsScreen';
import FavoritesProvider from '../context/FavoritesContext';
import MyTabs from './TabsNavigator';

const Stack = createStackNavigator();

function FavoritesState({ children }) {
    return (
        <>
            <FavoritesProvider>
                {children}
            </FavoritesProvider>
        </>
    );
}

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <FavoritesState>
                <Stack.Navigator>
                    <Stack.Screen name="Pokemons" component={MyTabs} />
                    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                </Stack.Navigator>
            </FavoritesState>
        </NavigationContainer>
    );
}
