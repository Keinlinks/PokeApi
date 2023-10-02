import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pokemon_table } from 'src/app/models/Pokemon_table';
import { PokemonRepositoryService } from 'src/app/services/pokemon-repository.service';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { SearchQueryService } from 'src/app/services/search-query.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['image', 'id', 'pokemon', 'favorite'];

  dataSource = new MatTableDataSource<Pokemon_table>();
  pageSize: number = 10;
  dataLength: number = 10;
  favoritePokemon: string = '';
  selectPokemonList: string = '';
  searchQuery: string = '';
  isLoading: boolean = false;
  pokemonNames: string[] = [];
  //
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  searchFilter() {
    this.paginator.firstPage();
    this.isLoading = true;
    this.search
      .searchQuery(
        this.searchQuery.trim().toLowerCase(),
        this.pageSize,
        this.paginator.pageIndex
      )
      .subscribe((pokemonList) => {
        this.pokemonReposity.setPokemon(pokemonList);
      });
  }
  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Pokemon por pagina';
    this.pokemonReposity.pokemonOnChange().subscribe((pokemons) => {
      let pokemonList = this.pokemonService.turnToPokemon_Table(pokemons);
      this.dataLength = this.pokemonReposity.count$.getValue();
      this.dataSource.data = pokemonList;
      this.isLoading = false;
    });
  }
  ngOnInit() {
    this.search.searchQuery('', this.pageSize, 0).subscribe((pokemons) => {
      this.pokemonReposity.setPokemon(pokemons);
      this.pokemonReposity.getPokemonInfo(pokemons[0].url).subscribe((info) => {
        this.pokemonReposity.setSelectedPokemon(info);
      }).closed;
    }).closed;
    this.pokemonReposity.count$.asObservable().subscribe((number) => {
      this.dataLength = number;
    });
    this.pokemonReposity.favoritePokemonOnChange().subscribe((pokemon) => {
      this.favoritePokemon = pokemon.name;
    });
  }
  changePage(event: PageEvent) {
    this.isLoading = true;
    this.search
      .searchQuery(
        this.searchQuery.trim().toLowerCase(),
        this.pageSize,
        event.pageIndex
      )
      .subscribe((pokemonList) => {
        this.pokemonReposity.setPokemon(pokemonList);
      });
  }
  favorite(pokemon_favorite: Pokemon_table) {
    this.pokemonReposity
      .getPokemonInfo(pokemon_favorite.url)
      .subscribe((pokemon) => {
        this.pokemonReposity.setFavoritePokemon(pokemon);
      });
  }
  selectPokemon(select: Pokemon_table) {
    this.selectPokemonList = select.name;
    this.pokemonReposity.loading$.next(true);
    this.pokemonReposity.getPokemonInfo(select.url).subscribe((pokemon) => {
      this.pokemonReposity.setSelectedPokemon(pokemon);
    });
  }

  querys(type: string, pageSize: number, indexPage: number) {
    this.search.searchQuery(type, pageSize, indexPage * pageSize);
  }
  constructor(
    private pokemonReposity: PokemonRepositoryService,
    private search: SearchQueryService,
    private pokemonService: PokemonServiceService
  ) {
    pokemonReposity.getNamesList().subscribe((names) => {
      this.pokemonNames = names;
    });
  }
}
