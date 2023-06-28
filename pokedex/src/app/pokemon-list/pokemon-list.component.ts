import {Component, Input} from '@angular/core';
import {ajax} from "rxjs/internal/ajax/ajax";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  name = '';

  search(){
    ajax.get("https://pokeapi.co/api/v2/pokemon")
      .pipe()
  }
}
