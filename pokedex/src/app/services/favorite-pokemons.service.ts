import {inject, Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  getDoc,
  setDoc
} from "@angular/fire/firestore";
import {PokeApiService} from "./poke-api.service";
import {Auth, user} from "@angular/fire/auth";
import {PokeAPI} from "pokeapi-types";
import {map, Observable, of} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {PokemonService} from "./pokemon.service";

interface FavoritePokemon {
  userId: string,
  pokemonId: string
}

@Injectable({
  providedIn: 'root'
})
export class FavoritePokemonsService {
  firestore: Firestore = inject(Firestore);
  angularFirestore: AngularFirestore = inject(AngularFirestore)
  auth = inject(Auth)

  serviceCollection = 'favoritePokemons'

  favoritePokemonRef = collection(this.firestore,this.serviceCollection);

  async getFavoritePokemons() : Promise<PokeAPI.Pokemon[]>{
    let userID = this._getUserID()
    if(userID == undefined) return [];

    let query = await this.angularFirestore.firestore.collection(this.serviceCollection)
      .where('userId', '==', userID)
      .get()

    let pokemons: PokeAPI.Pokemon[] = []
    query.docs.forEach(
      doc => pokemons.push(doc.data() as PokeAPI.Pokemon)
    )

    return pokemons
  }

  async getFavoritePokemon(pokemonID : number) : Promise<boolean> {
    let userID = this._getUserID()
    if(userID == undefined) return false;

    let query = await this.angularFirestore.firestore.collection(this.serviceCollection)
      .where('userId', '==', userID)
      .where('pokemonId', '==', pokemonID)
      .get()

    let docs = query.docs
    return docs.length != 0;
  }

  async setFavoritePokemon(pokemonID : number, value: boolean){
    let userID = this.auth.currentUser?.uid
    if(userID == undefined) return false

    let query = await this.angularFirestore.firestore.collection(this.serviceCollection)
      .where('userId', '==', userID)
      .where('pokemonId', '==', pokemonID)
      .get()


    let exist = query.docs.length != 0

    if(value && !exist){
      await addDoc(this.favoritePokemonRef, {userId: userID, pokemonId: pokemonID})
      return true
    }
    if(!value && exist){
      query.docs.forEach(
        doc => doc.ref.delete()
      )
      return false
    }
    return value && exist;
  }

  _getUserID(){
    return this.auth.currentUser?.uid
  }
}
