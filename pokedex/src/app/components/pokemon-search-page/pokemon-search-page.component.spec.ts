import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchPageComponent } from './pokemon-search-page.component';

describe('PokemonSearchPageComponent', () => {
  let component: PokemonSearchPageComponent;
  let fixture: ComponentFixture<PokemonSearchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonSearchPageComponent]
    });
    fixture = TestBed.createComponent(PokemonSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
