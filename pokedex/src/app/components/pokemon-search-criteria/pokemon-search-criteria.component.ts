import {Component, EventEmitter, Output} from '@angular/core';
import {PokemonCriteria} from "../../services/local-pokemon.service";

@Component({
  selector: 'app-pokemon-search-criteria',
  templateUrl: './pokemon-search-criteria.component.html',
  styleUrls: ['./pokemon-search-criteria.component.css']
})
export class PokemonSearchCriteriaComponent {
  @Output()
  criteria: EventEmitter<PokemonCriteria> = new EventEmitter<PokemonCriteria>();

  criteriaa : PokemonCriteria = {
    name: ''
  }

  updateCriteria() {
    this.criteria.emit(this.criteriaa)
  }
}
