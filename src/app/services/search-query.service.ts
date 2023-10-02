import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { environment } from 'src/environment';
import { PokemonBasic, ResponsePokemon } from '../models/ResponsePokemon';
import { PokemonRepositoryService } from './pokemon-repository.service';

@Injectable({
  providedIn: 'root',
})
export class SearchQueryService {
  constructor(
    private http: HttpClient,
    private pokemonRespository: PokemonRepositoryService
  ) {}

  searchQuery(
    type: string,
    limit: number,
    page: number
  ): Observable<PokemonBasic[]> {
    return this.http
      .get<ResponsePokemon>(
        `${environment.APIURL}/pokemon?limit=100000&offset=0`
      )
      .pipe(
        map((response) => {
          let pokemons = response.results.filter((pokemonBasic) => {
            return pokemonBasic.name.includes(type);
          });
          this.pokemonRespository.setCount(pokemons.length);
          let start = limit * page;
          let finish = start + limit;
          return pokemons.slice(start, finish);
        })
      );
  }
}
