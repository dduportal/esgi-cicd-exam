import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonSearchCriteriaComponent } from './components/pokemon-search-criteria/pokemon-search-criteria.component';
import { PokemonSearchPageComponent } from './components/pokemon-search-page/pokemon-search-page.component';
import { TempComponent } from './temp/temp.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    HeaderComponent,
    FooterComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
    PokemonSearchCriteriaComponent,
    PokemonSearchPageComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
