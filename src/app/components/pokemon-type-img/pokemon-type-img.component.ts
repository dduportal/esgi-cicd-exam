import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pokemon-type-img',
  templateUrl: './pokemon-type-img.component.html',
  styleUrls: ['./pokemon-type-img.component.css']
})
export class PokemonTypeImgComponent {
  @Input({required: true})
  pokemonType: string = ""
}
