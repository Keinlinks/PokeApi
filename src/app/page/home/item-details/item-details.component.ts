import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonRepositoryService } from 'src/app/services/pokemon-repository.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  constructor(private pokemonRepository: PokemonRepositoryService) {}
  selectedPokemon!: Pokemon;
  isLoading: boolean = true;
  ngOnInit() {
    this.pokemonRepository.selectedPokemonOnChange().subscribe((selected) => {
      this.selectedPokemon = selected;
      this.isLoading = false;
    });
    this.pokemonRepository.loading$.asObservable().subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}
