import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PokeAPI} from "pokeapi-types";

import {
  collection,
  collectionData,
  doc, docData,
  Firestore,
  setDoc,
  writeBatch
} from "@angular/fire/firestore";
import {PokeApiService} from "./poke.api.service";



@Injectable({
  providedIn: 'root',
})

/**
 * Service laissé en exemple, permet de communiquer avec Firebase dans une bdd firestore
 * Je suis resté sur un stockage local pour accélerer le developpement du pokedex, je voulais simplement découvrir
 * ! Le service est fonctionnel !
 */
export class PokemonService {
  firestore: Firestore = inject(Firestore);
  pokeApiService : PokeApiService = inject(PokeApiService)

  pokemonsRef = collection(this.firestore,'pokemons2');

  /**
   * Obtenir un pokemon par son id
   * @param id identifiant du pokemon
   */
  getPokemon(id:number){
    return docData(doc(this.pokemonsRef, id.toString()))
  }

  /**
   * Créer un pokemon
   * @param pokemon pokemon à créer
   */
  createPokemon(pokemon : PokeAPI.Pokemon){
    return setDoc(doc(this.pokemonsRef, pokemon.id.toString()), pokemon)
  }

  /**
   * Obtenir tout les pokemons
   */
  getPokemons(){
    return (collectionData(this.pokemonsRef) as Observable<PokeAPI.Pokemon[]>)
  }


  /**
   * Permet d'insérer les pokemons par batch
   * @param pokemons liste des pokemons à insérer
   * @param batchSize taille de chaque batch
   */
  async createBatchPokemon(pokemons: PokeAPI.Pokemon[], batchSize : number) {
    let batchList = []
    let batch = writeBatch(this.firestore)

    let count = 0
    for (const pokemon of pokemons) {
      let pokemonRef = doc(this.pokemonsRef,pokemon.id.toString())
      batch.set(pokemonRef, pokemon)

      count = count + 1
      if(count >= batchSize){
        batchList.push(batch)
        batch = writeBatch(this.firestore)
        count = 0
      }
    }

    for(batch of batchList){
      await batch.commit()
    }
  }


  /**
   * Obtiens les pokemons de pokeAPI et les inserts dans firestore
   */
  fetchPokemonsIntoFirestore() {
    this.pokeApiService.getAllPokemonDetails().subscribe(
    data => {
        this.createBatchPokemon(data,10)
      }
    )
  }
}
