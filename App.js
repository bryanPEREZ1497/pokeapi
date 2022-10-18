import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="account" color={color} size={26} />
            // <MaterialCommunityIcons name="search" color={color} size={26} />
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from './screens/DetailsScreen';
// import { FavoritesProvider } from './context/FavoritesContext.js';
import FavoritesProvider from './context/FavoritesContext.js';

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

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


function MyStack() {
  return (
    // <SafeAreaProvider>
    <NavigationContainer>
      <FavoritesState>
        <Stack.Navigator>
          <Stack.Screen name="Pokemons" component={MyTabs} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </FavoritesState>
    </NavigationContainer>
    // </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <MyStack />
  );
}