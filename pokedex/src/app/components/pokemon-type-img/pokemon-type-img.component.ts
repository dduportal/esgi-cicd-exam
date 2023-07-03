import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pokemon-type-img',
  templateUrl: './pokemon-type-img.component.html',
  styleUrls: ['./pokemon-type-img.component.css']
})
export class PokemonTypeImgComponent {
  @Input({required: true})
  pokemonType: string = ""

  colorClass = ""

  ngOnInit(){
    this.updateColorClass()
  }

  private updateColorClass() {
    if(this.pokemonType.length > 0){
      this.colorClass = "bg-poke" + this.pokemonType.at(0)!.toUpperCase() + this.pokemonType.slice(1)
      console.log(this.colorClass)
    }
  }
}
