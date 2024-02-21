import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PokeAPI} from "pokeapi-types";
import {LocalPokemonService} from "../../services/local-pokemon.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {

  activatedroute = inject(ActivatedRoute)
  localPokemonService = inject(LocalPokemonService)

  id : number | undefined
  pokemon: PokeAPI.Pokemon | undefined

  constructor(){

    this.activatedroute.queryParamMap
      .subscribe(params => {
        let id = params.get('id')
        if(id != null){
          this.id = parseInt(id)
          this.localPokemonService.getPokemon(this.id).subscribe((pokemon) => {
            this.pokemon = pokemon
          })
        }
      });
  }


}
