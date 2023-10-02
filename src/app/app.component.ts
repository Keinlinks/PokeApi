import { Component } from '@angular/core';
import { PokemonRepositoryService } from './services/pokemon-repository.service';
import { ResponsePokemon } from './models/ResponsePokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PokeApi_2';
  constructor(private pokemonRepository: PokemonRepositoryService) {}
}
