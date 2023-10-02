export interface ResponsePokemon {
  count: number;
  next: string;
  previous: string;
  results: PokemonBasic[];
}
export interface PokemonBasic {
  name: string;
  url: string;
}
