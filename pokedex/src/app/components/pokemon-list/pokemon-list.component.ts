import {Component, Input} from '@angular/core';
import {ajax} from "rxjs/internal/ajax/ajax";
import {PokemonService} from "../../services/pokemon.service";
import {offsetSegment} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";
import {data} from "autoprefixer";
import {forkJoin} from "rxjs";
import {PokeAPI} from "pokeapi-types";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemonService;

  name = '';
  pokemons : PokeAPI.Pokemon[] = [];

  offset = 0;
  limit = 20;

  constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService;

    this.search();
  }

  precedent(){
    this.offset -= this.limit
    if(this.offset < 0){
      this.offset = 0
    }
    this.search()
  }

  suivant(){
    this.offset += this.limit
    this.search()
  }

  search(){
    let pokemons = this.pokemonService.getPokemonDetailsFromCriteria({limit:this.limit, offset:this.offset}).pipe().subscribe(data => data.subscribe(data => this.pokemons=data))
  }
}
