import { Component } from '@angular/core';
import {PokeAPI} from "pokeapi-types";
import {LocalPokemonService, PokemonCriteria} from "../../services/local-pokemon.service";

@Component({
  selector: 'app-pokemon-search-page',
  templateUrl: './pokemon-search-page.component.html',
  styleUrls: ['./pokemon-search-page.component.css']
})
export class PokemonSearchPageComponent {
  pokemons : PokeAPI.Pokemon[] = [];
  paginatedPokemons : PokeAPI.Pokemon[] = [];

  criteria: PokemonCriteria = {}

  offset = 0;
  limit = 12;

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
      .getPokemonsByCriteria(this.criteria)
      .subscribe(pokemons => {
        this.offset = 0
        this.pokemons = pokemons
        this.updatePaginatedPokemons()
      })
  }

  updateCriteria(criteria: PokemonCriteria) {
    this.criteria = criteria
    this.search()
  }
}
