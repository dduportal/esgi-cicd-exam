import {HttpClient} from "@angular/common/http";
import {PokeAPI} from "pokeapi-types";
import {forkJoin, map, Observable, switchMap} from "rxjs";
import {inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

/**
 * Service permettant de récupérer les informations de la PokeAPI (https://pokeapi.co)
 */
export class PokeApiService {
  http = inject(HttpClient)
  pokemonUrl = 'https://pokeapi.co/api/v2/'

  /**
   * Obtenir la liste de tout les pokemons
   */
  getAllPokemons(): Observable<PokeAPI.NamedAPIResource[]> {
    return this.http.get<PokeAPI.NamedAPIResourceList>(`${this.pokemonUrl}pokemon?limit=10000`).pipe(
      map(response => response.results)
    );
  }

  /**
   * Obtenir le détail de tout les pokemons
   */
  getAllPokemonDetails(): Observable<PokeAPI.Pokemon[]> {
    return this.getAllPokemons().pipe(
      switchMap(pokemons => {
        const pokemonObservables = pokemons.map(pokemon => {
          return this.http.get<PokeAPI.Pokemon>(pokemon.url)
        });
        return forkJoin(pokemonObservables);
      })
    );
  }

  getPokemonCount(){
    return this.http.get<PokeAPI.NamedAPIResourceList>(this.pokemonUrl + "pokemon?limit=1").pipe(
      map(apiRes => apiRes.count)
    )
  }
}
