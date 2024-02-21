import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeImgComponent } from './pokemon-type-img.component';

describe('PokemonTypeImgComponent', () => {
  let component: PokemonTypeImgComponent;
  let fixture: ComponentFixture<PokemonTypeImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonTypeImgComponent]
    });
    fixture = TestBed.createComponent(PokemonTypeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
