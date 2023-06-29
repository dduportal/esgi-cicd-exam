import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchCriteriaComponent } from './pokemon-search-criteria.component';

describe('PokemonSearchCriteriaComponent', () => {
  let component: PokemonSearchCriteriaComponent;
  let fixture: ComponentFixture<PokemonSearchCriteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonSearchCriteriaComponent]
    });
    fixture = TestBed.createComponent(PokemonSearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
