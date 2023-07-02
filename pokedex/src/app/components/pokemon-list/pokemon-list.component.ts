import {Component} from '@angular/core';
import {PokeAPI} from "pokeapi-types";
import {LocalPokemonService} from "../../services/local-pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  name = '';
  pokemons : PokeAPI.Pokemon[] = [];
  paginatedPokemons : PokeAPI.Pokemon[] = [];

  offset = 0;
  limit = 10;

  hasNextElements = false;
  hasPreviousElements = false;

  constructor(private localPokemonService: LocalPokemonService) {
    this.search();
  }

  precedent(){
    this.offset -= this.limit
    this.updatePaginatedPokemons()
  }

  suivant(){
    this.offset += this.limit
    this.updatePaginatedPokemons()
  }

  updatePaginatedPokemons(){
    if(this.offset > this.pokemons.length || this.offset < 0){
      this.offset = 0
    }

    let end = this.offset + this.limit
    if(end > this.pokemons.length){
      end = this.pokemons.length
    }

    this.paginatedPokemons = this.pokemons.slice(this.offset, end)
    this.checkForPreviousAndNextElements()
  }

  checkForPreviousAndNextElements(){
    this.hasNextElements = this.offset + this.limit < this.pokemons.length;
    this.hasPreviousElements = this.offset != 0;
  }


  search(){
    this.localPokemonService
      .getPokemonsByCriteria({name: this.name}, 0,0)
      .subscribe(pokemons => {
          this.offset = 0
          this.pokemons = pokemons
          this.updatePaginatedPokemons()
        })
  }
}
