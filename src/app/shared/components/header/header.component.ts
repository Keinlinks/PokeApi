import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ShipComponent } from '../ship/ship.component';
import { PokemonRepositoryService } from 'src/app/services/pokemon-repository.service';
import { Pokemon } from 'src/app/models/Pokemon';
import { FirstUppercasePipe } from '../../../pipes/first-uppercase.pipe';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { PokemonInfoPopupComponent } from '../modals/pokemon-info-popup/pokemon-info-popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, ShipComponent, FirstUppercasePipe, MatDialogModule],
})
export class HeaderComponent implements OnInit {
  favoritePokemon!: Pokemon;
  constructor(
    private pokemonRepository: PokemonRepositoryService,
    private dialog: MatDialog
  ) {}
  ngOnInit() {
    this.pokemonRepository.favoritePokemonOnChange().subscribe((pokemon) => {
      this.favoritePokemon = pokemon;
    });
  }
  openModal() {
    this.dialog.open(PokemonInfoPopupComponent, { data: this.favoritePokemon });
  }
}
