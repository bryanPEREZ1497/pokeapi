import React, { useEffect, useState } from 'react';
import PokemonDetailComponent from '../components/PokemonDetailComponent';

export default function DetailsScreen({ route }) {
  const pokemon = route.params;
  return (
    <PokemonDetailComponent pokemon={pokemon} />
  );
}
