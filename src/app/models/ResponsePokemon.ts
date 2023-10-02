export interface ResponseAPI {
  count: number;
  next: string;
  previous: string;
  results: PokemonBasicInfo[];
}
export interface PokemonBasicInfo {
  name: string;
  url: string;
}
