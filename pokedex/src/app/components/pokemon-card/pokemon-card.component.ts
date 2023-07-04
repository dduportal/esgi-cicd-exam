import {Component, inject, Input} from '@angular/core';
import {PokeAPI} from "pokeapi-types";
import {Router} from "@angular/router";
import {FavoritePokemonsService} from "../../services/favorite-pokemons.service";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input({required: true}) pokemon!: PokeAPI.Pokemon;

  favoritePokemons = inject(FavoritePokemonsService)
  router = inject(Router)

  isFavorite  = false

  ngOnInit(){
    this.favoritePokemons.getFavoritePokemon(this.pokemon.id)
      .then(res => this.isFavorite = res)
  }

  goToPokemonDetail() {
    this.router.navigate(["/pokemon"], {queryParams: {id: this.pokemon.id}})
  }

  addToFavorite() {
    this.favoritePokemons.setFavoritePokemon(this.pokemon.id, !this.isFavorite)
      .then(res => this.isFavorite = res)
  }
}
