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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { SignupPageComponent } from './components/auth/signup-page/signup-page.component';
import { InputBaseComponent } from './components/core/input-base/input-base.component';
import { ButtonBaseComponent } from './components/core/button-base/button-base.component';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import { PokemonTypeImgComponent } from './components/pokemon-type-img/pokemon-type-img.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
    LoginPageComponent,
    SignupPageComponent,
    InputBaseComponent,
    ButtonBaseComponent,
    PokemonTypeImgComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
