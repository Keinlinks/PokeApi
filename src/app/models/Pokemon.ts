import { PokemonObject } from './commonObject';

export interface Pokemon extends PokemonObject {
  height: number;
  weight: number;
  gameImage: string;
  artImage: string;
  types: string[];
  abilities: string[];
  shinyImage?: string;
  stats?: stat[];
}

export interface stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
