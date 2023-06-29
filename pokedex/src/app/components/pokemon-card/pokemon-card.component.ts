import {Component, Input} from '@angular/core';
import {Pokemon} from "pokeapi-types";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input({required: true}) pokemon!: Pokemon;


  testt(){
    console.log("sprite :");
  }
}
