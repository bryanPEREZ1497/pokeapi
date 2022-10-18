import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function HomeScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [offset, setOffset] = useState(12);
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => { setPokemon(item); onOpen(); }}
    >
      <Image
        style={{
          width: 300,
          height: 300,
        }} source={{ uri: item.sprites?.other.dream_world.front_default }} />

      <Text>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`;
    fetch(url)
      .then(response => response.json())
      .then(JsonResponse => {
        JsonResponse.results.forEach(pokemon => {
          fetch(pokemon.url)
            .then(response => response.json())
            .then(JsonResponse => {
              setPokemons([...pokemons, JsonResponse]);
              console.log('1res', pokemons);
            });
        });
        setPokemons([...pokemons, ...JsonResponse.results]);
      })
      .catch(error => console.log(error));

  }, [offset])

  return (
    <>
      <Modalize
        ref={modalizeRef}
        snapPoint={400}
        modalHeight={700}
        HeaderComponent={
          <View style={{
            width: '100%',
            height: 70,
            backgroundColor: 'white',
            borderBottomWidth: 2, borderStyle: 'solid', borderBottomColor: 'lightgray',
          }}>
            <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 15 }}>
              {pokemon?.name}
            </Text>
          </View>
        }>
        <Text>Modal Content</Text>
        
        <Image
          style={{
            width: 100,
            height: 100,
          }} source={{ uri: pokemon?.sprites.back_default }} />
        
        <Image
          style={{
            width: 100,
            height: 100,
          }} source={{ uri: pokemon?.sprites.front_default }} />
        
        <Image
          style={{
            width: 100,
            height: 100,
          }} source={{ uri: pokemon?.sprites.other.home.front_default }} />
        
        <Image
          style={{
            width: 100,
            height: 100,
          }} source={{ uri: pokemon?.sprites.other.home["official - artwork"] }} />

      </Modalize>
      <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        data={pokemons}
        numColumns={1}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        onEndReached={() => {
          setOffset(offset + 12);
        }}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
      />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  images: {
    width: 125,
    height: 250,
    margin: 5,
    borderRadius: 3,
  },
  txt: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    // marginHorizontal: 16,
    // width: 100,
    // height: 100,
  },

});
