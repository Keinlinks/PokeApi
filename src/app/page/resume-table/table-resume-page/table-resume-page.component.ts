import { Component } from '@angular/core';
import { Pokemon_table } from 'src/app/models/Pokemon_table';
import { PokemonRepositoryService } from 'src/app/services/pokemon-repository.service';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { SearchQueryService } from 'src/app/services/search-query.service';

@Component({
  selector: 'app-table-resume-page',
  templateUrl: './table-resume-page.component.html',
  styleUrls: ['./table-resume-page.component.css'],
})
export class TableResumePageComponent {
  alphabet: string[] = [];
  pokemonsAlphabet: Pokemon_table[][] = [];
  constructor(
    private search: SearchQueryService,
    private pokemonService: PokemonServiceService,
    private pokemonRepository: PokemonRepositoryService
  ) {
    for (let i = 0; i < 26; i++) {
      this.pokemonsAlphabet.push([]);
    }
    for (let i = 65; i <= 90; i++) {
      this.alphabet.push(String.fromCharCode(i));
    }
  }
  ngAfterViewInit(): void {
    this.search.searchQuery('', 10000, 0).subscribe((pokemons) => {
      const tableData = this.pokemonService.turnToPokemon_Table(pokemons);
      tableData.forEach((pokemon) => {
        const firstLetter = pokemon.name[0];
        this.pokemonsAlphabet[firstLetter.charCodeAt(0) - 97].push(pokemon);
      });
      this.pokemonRepository.setAlphabet(this.pokemonsAlphabet);
    });
  }
}
