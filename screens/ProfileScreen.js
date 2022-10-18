import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>ProfileScreen!</Text>
            <Text>My name is Bryan Perez</Text>
            <Text>Please visit my portfolio page</Text>
            <a href='https://bryanperez1497.github.io/portfolio/'>Here</a>
        </View>
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