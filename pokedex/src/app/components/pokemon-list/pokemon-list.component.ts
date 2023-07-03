import {Component, Input} from '@angular/core';
import {PokeAPI} from "pokeapi-types";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  @Input()
  pokemons: PokeAPI.Pokemon[] = []
}
