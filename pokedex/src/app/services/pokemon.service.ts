import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, forkJoin, map, mergeMap, Observable, of, throwError} from 'rxjs';
import {NamedAPIResource, NamedAPIResourceList, Pokemon} from "pokeapi-types";

export interface PokemonServiceCriteria {
  limit? : number,
  offset? : number
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  pokemonUrl = 'https://pokeapi.co/api/v2/'
  private cachedPokemons: { [url: string]: any } = {};

  constructor(private http: HttpClient) { }

  getPokemonDetailsFromCriteria(criteria: PokemonServiceCriteria){
    let parameters = '?'

    if (typeof criteria.limit !== undefined) {
      parameters += 'limit=' + criteria.limit + '&'
    }
    if (typeof criteria.offset !== undefined) {
      parameters += 'offset=' + criteria.offset + '&'
    }

    let pokemons : Pokemon[] = []
    return this.http.get<NamedAPIResourceList>(`${this.pokemonUrl}pokemon${parameters}`).pipe(
      map(response => response.results),
      map(pokemons => {
        const pokemonObservables = pokemons.map(pokemon => {
          return this.getPokemonDetails(pokemon.url);
        });
        return forkJoin(pokemonObservables);
      })
    );
  }

  getAllPokemons(): Observable<NamedAPIResource[]> {
    return this.http.get<NamedAPIResourceList>(`${this.pokemonUrl}pokemon?limit=10000`).pipe(
      map(response => response.results)
    );
  }

  getPokemonDetails(url: string): Observable<any> {
    if (this.cachedPokemons[url]) {
      return of(this.cachedPokemons[url]);
    } else {
      return this.http.get<any>(url).pipe(
        map(response => {
          this.cachedPokemons[url] = response;
          return response;
        }),
        catchError(error => {
          delete this.cachedPokemons[url]; // Remove from cache in case of error
          return throwError(error);
        })
      );
    }
  }

  getAllPokemonDetails(): Observable<Pokemon[]> {
    return this.getAllPokemons().pipe(
      mergeMap(pokemons => {
        const pokemonObservables = pokemons.map(pokemon => {
          return this.getPokemonDetails(pokemon.url);
        });
        return forkJoin(pokemonObservables);
      })
    );
  }


}
