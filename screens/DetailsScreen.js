import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetailsScreen({ route }) {
  const pokemon = route.params;
  console.log(pokemon);
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 400,
          height: 200,
        }}
        source={{ uri: pokemon.sprites?.other.dream_world.front_default }} />

      <Text>
        {pokemon.name}
      </Text>
    </View>
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
