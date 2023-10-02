export interface Pokemon {
  id: number;
  height: number;
  weight: number;
  name: string;
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
