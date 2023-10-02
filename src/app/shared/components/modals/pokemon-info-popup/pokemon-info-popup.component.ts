import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Pokemon, stat } from 'src/app/models/Pokemon';
import { FirstUppercasePipe } from 'src/app/pipes/first-uppercase.pipe';
import { environment } from 'src/environment';

@Component({
  selector: 'app-pokemon-info-popup',
  templateUrl: './pokemon-info-popup.component.html',
  styleUrls: ['./pokemon-info-popup.component.css'],
  standalone: true,
  imports: [MatDialogModule, CommonModule, FirstUppercasePipe],
})
export class PokemonInfoPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<PokemonInfoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pokemon,
    private http: HttpClient
  ) {
    http
      .get<Pokemon>(`${environment.APIURL}/pokemon/${data.id}`)
      .subscribe((info) => {
        if (info.stats) {
          this.stats = info.stats;
        }
      });
  }
  stats!: stat[];
}
