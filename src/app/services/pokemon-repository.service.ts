import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { environment } from 'src/environment';
import { PokemonBasic, ResponsePokemon } from '../models/ResponsePokemon';
import { Pokemon_table } from '../models/Pokemon_table';

@Injectable({
  providedIn: 'root',
})
export class PokemonRepositoryService {
  constructor(private http: HttpClient) {}
  //Pokemon Data for table of alphabet
  private alpgabetList$ = new Subject<Pokemon_table[][]>();
  //pokemon with basic pokemon information
  private pokemon$ = new BehaviorSubject<PokemonBasic[]>([]);
  //pokemon list with all names for autocomplete
  private pokemonNamesList$ = new Subject<string[]>();
  //count of pokemons
  public count$ = new BehaviorSubject<number>(0);
  private favoritePokemon$ = new BehaviorSubject<Pokemon>({
    id: 0,
    height: 0,
    weight: 0,
    name: '',
    gameImage: '',
    artImage: '',
    types: [],
    abilities: [],
  });
  private selectedPokemon$ = new BehaviorSubject<Pokemon>({
    id: 0,
    height: 0,
    weight: 0,
    name: '',
    gameImage: '',
    artImage: '',
    types: [],
    abilities: [],
  });
  public loading$ = new Subject<boolean>();

  //OnChangeObjects
  pokemonOnChange() {
    return this.pokemon$.asObservable();
  }
  favoritePokemonOnChange() {
    return this.favoritePokemon$.asObservable();
  }
  selectedPokemonOnChange() {
    return this.selectedPokemon$.asObservable();
  }
  //GETS
  getPokemonInfo(url: string): Observable<Pokemon> {
    return this.http.get(url).pipe(
      map((data: any) => {
        let types: string[] = [];
        let abilities: string[] = [];

        for (let type of data.types) {
          types.push(type.type.name);
        }

        for (let ability of data.abilities) {
          abilities.push(ability.ability.name);
        }

        const pokemonInfo: Pokemon = {
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          gameImage: data.sprites.front_default,
          artImage: data.sprites.other['official-artwork'].front_default,
          types: types,
          abilities: abilities,
          shinyImage: data.sprites.front_shiny,
        };

        return pokemonInfo;
      })
    );
  }
  getAlphabet() {
    return this.alpgabetList$.asObservable();
  }
  getNamesList() {
    return this.pokemonNamesList$.asObservable();
  }
  //SETS
  setPokemon(pokemon: PokemonBasic[]) {
    this.pokemon$.next(pokemon);
  }
  setCount(count: number) {
    this.count$.next(count);
  }
  setFavoritePokemon(pokemon: Pokemon) {
    this.favoritePokemon$.next(pokemon);
  }
  setSelectedPokemon(pokemon: Pokemon) {
    this.selectedPokemon$.next(pokemon);
  }
  setAlphabet(tableData: Pokemon_table[][]) {
    this.alpgabetList$.next(tableData);
  }
  setNamesPokemon(nameList: string[]) {
    this.pokemonNamesList$.next(nameList);
  }
}
