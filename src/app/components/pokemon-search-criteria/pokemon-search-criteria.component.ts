import {Component, EventEmitter, Output} from '@angular/core';
import {PokemonCriteria} from "../../services/local-pokemon.service";

@Component({
  selector: 'app-pokemon-search-criteria',
  templateUrl: './pokemon-search-criteria.component.html',
  styleUrls: ['./pokemon-search-criteria.component.css']
})
export class PokemonSearchCriteriaComponent {
  @Output()
  criteriaChange: EventEmitter<PokemonCriteria> = new EventEmitter<PokemonCriteria>();

  criteria : PokemonCriteria = {
    name: ''
  }

  updateCriteria() {
    this.criteriaChange.emit(this.criteria)
  }
}
