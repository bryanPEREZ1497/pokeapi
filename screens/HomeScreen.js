import React, { useEffect, useState, useRef, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card } from 'react-native-paper';

import FavoriteButton from '../components/FavoriteButton';


export default function HomeScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [offset, setOffset] = useState(12);
  const modalizeRef = useRef(null);
  const navigation = useNavigation();

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => { setPokemon(item); onOpen(); }}
    >
      <Card
        elevation={2}
      >
        <Card.Title title={item.name} left={()=><FavoriteButton favorite={item}/>} />

        <Card.Cover
          source={{ uri: item.sprites?.other.dream_world.front_default }}
          style={{
            width: 340,
            height: 340,
          }}
        />

      </Card>
    </TouchableOpacity>
  );

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=4&offset=${offset}`;
    fetch(url)
      .then(response => response.json())
      .then(JsonResponse => {
        JsonResponse.results.forEach(pokemon => {
          fetch(pokemon.url)
            .then(response => response.json())
            .then(JsonResponse => {
              setPokemons([...pokemons, JsonResponse]);
            })
            .catch(error => console.log(error));
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
        onRefresh={() => {
          setOffset(offset + 12);
        }}
        refreshing={true}
        HeaderComponent={
          <View style={{
            width: '100%',
            height: 70,
            backgroundColor: 'white',
            borderBottomWidth: 2, borderStyle: 'solid', borderBottomColor: 'lightgray',
          }}>
            <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 15 }}>
              {String(pokemon?.name).toUpperCase()}
            </Text>
          </View>
        }>

        <View
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'
          }}>

          <Pressable onPress={() => {
            modalizeRef.current?.close();
            navigation.navigate('DetailsScreen', { ...pokemon })
          }}>

            <Icon name="details" size={26} />

          </Pressable>
          <TouchableOpacity>
            <Image
              style={styles.images}
              source={{ uri: pokemon?.sprites.other.home.front_default }} />
          </TouchableOpacity>
        </View>

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
    width: 500,
    height: 500,
    // margin: 5,
    // borderRadius: 3,
  },
  txt: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  item: {
    // backgroundColor: '#f9c2ff',
    // padding: 20,
    marginVertical: 8,
    // marginHorizontal: 16,
    // width: 100,
    // height: 100,
  },

});
