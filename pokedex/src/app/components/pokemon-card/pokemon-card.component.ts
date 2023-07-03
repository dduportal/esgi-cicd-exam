import {Component, inject, Input} from '@angular/core';
import {PokeAPI} from "pokeapi-types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input({required: true}) pokemon!: PokeAPI.Pokemon;

  router = inject(Router)

  goToPokemonDetail() {
    this.router.navigate(["/pokemon"], {queryParams: {id: this.pokemon.id}})
  }
}
