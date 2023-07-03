import {inject, Injectable} from '@angular/core';
import {PokeAPI} from "pokeapi-types";
import {PokeApiService} from "./poke-api.service";
import {BehaviorSubject, map, Observable, of} from "rxjs";

export interface PokemonCriteria {
  name? : string,

}

@Injectable({
  providedIn: 'root'
})

/**
 * Service utilisé pour obtenir les pokemons, sauvegardés directement dans le stockage local
 */
export class LocalPokemonService {
  pokeApiService : PokeApiService = inject(PokeApiService)
  pokemons : BehaviorSubject<PokeAPI.Pokemon[]> = new BehaviorSubject<PokeAPI.Pokemon[]>([])

  constructor() {
    this.pokeApiService.getAllPokemonDetails()
      .subscribe(pokemons => this.pokemons.next(pokemons))
  }

  /**
   * Obtenir les pokemons par critères
   * @param criteria critères de selection
   * @param limit limite d'élements
   * @param offset offset de selection
   */
  getPokemonsByCriteria(criteria: PokemonCriteria){
    return this.pokemons.pipe(
      map(pokemons => pokemons.filter(
        pokemon => {
          if (criteria.name !== undefined && !pokemon.name.includes(criteria.name)) {
            return false
          }

          return true
        }
      ))
    )
  }
}
