import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pokemon_table } from 'src/app/models/Pokemon_table';
import { PokemonRepositoryService } from 'src/app/services/pokemon-repository.service';

@Component({
  selector: 'app-resume-table',
  templateUrl: './resume-table.component.html',
  styleUrls: ['./resume-table.component.css'],
})
export class ResumeTableComponent {
  constructor(private pokemonReposity: PokemonRepositoryService) {
    pokemonReposity.getAlphabet().subscribe((tableData) => {
      this.dataSource.data = tableData[this.Id];
      this.isLoading = false;
    });
    this.pokemonReposity.favoritePokemonOnChange().subscribe((pokemon) => {
      this.favoritePokemon = pokemon.name;
    });
  }
  displayedColumns: string[] = ['image', 'id', 'pokemon', 'favorite'];
  favoritePokemon: string = '';
  dataSource = new MatTableDataSource<Pokemon_table>();
  isLoading = true;
  @Input() Id!: number;

  favorite(pokemon_favorite: Pokemon_table) {
    this.pokemonReposity
      .getPokemonInfo(pokemon_favorite.url)
      .subscribe((pokemon) => {
        this.pokemonReposity.setFavoritePokemon(pokemon);
      });
  }
}
