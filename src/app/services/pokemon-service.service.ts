import { Injectable } from '@angular/core';
import { PokemonBasicInfo } from '../models/ResponsePokemon';
import { Pokemon_table } from '../models/Pokemon_table';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  constructor() {}

  turnToPokemon_Table(pokemonBasic: PokemonBasicInfo[]) {
    let pokemonList: Pokemon_table[] = [];
    pokemonBasic.forEach((pokemon) => {
      const id = +pokemon.url.split('/')[pokemon.url.split('/').length - 2];
      const data = {
        id: id,
        name: pokemon.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        url: pokemon.url,
      };

      pokemonList.push(data);
    });
    return pokemonList;
  }
}
