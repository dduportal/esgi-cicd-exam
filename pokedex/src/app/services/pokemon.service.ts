import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, forkJoin, map, Observable, of, throwError} from 'rxjs';
import {PokeAPI} from "pokeapi-types";
import {AngularFirestore, DocumentSnapshot} from "@angular/fire/compat/firestore";
import {addDoc, collection, doc, Firestore, getDoc, getDocs, query, setDoc} from "@angular/fire/firestore";

export interface PokemonServiceCriteria {
  limit? : number,
  offset? : number
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {


  firestore: Firestore = inject(Firestore);
  pokemonCollection = collection(this.firestore, 'pokemons')
  pokemonsRef
  constructor(private db: AngularFirestore) {
    this.pokemonsRef = db.collection('/pokemons');
  }

  getPokemon(id:number){
    return this.pokemonsRef.doc(id.toString()).get()
  }
  createPokemon(pokemon : PokeAPI.Pokemon){
    addDoc(this.pokemonCollection, pokemon)
      .then((data) => {
        console.log(data)
      }).catch((error) => {
      console.log(error)
    })
  }

  async getPokemons(){
    let docs = await getDocs(query(this.pokemonCollection))
    return docs.docs
  }


}
