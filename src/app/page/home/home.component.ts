import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SearchQueryService } from 'src/app/services/search-query.service';
import { PokemonRepositoryService } from 'src/app/services/pokemon-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isOpenResume: boolean = false;
  constructor(
    private location: Location,
    private search: SearchQueryService,
    private pokemonRepository: PokemonRepositoryService
  ) {
    if (location.path().includes('resume')) {
      this.isOpenResume = true;
    }
  }
  ngOnInit(): void {
    this.search.searchQuery('', 10000, 0).subscribe((pokemonBasic) => {
      let listPokemonNames: string[] = [];
      pokemonBasic.forEach((pokemon) => {
        listPokemonNames.push(pokemon.name);
      });
      this.pokemonRepository.setNamesPokemon(listPokemonNames);
    });
  }
}
