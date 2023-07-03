import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonListComponent} from "./components/pokemon-list/pokemon-list.component";
import {LoginPageComponent} from "./components/auth/login-page/login-page.component";
import {SignupPageComponent} from "./components/auth/signup-page/signup-page.component";
import {AuthGuard, redirectLoggedInTo,redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {PokemonSearchPageComponent} from "./components/pokemon-search-page/pokemon-search-page.component";
import {PokemonDetailComponent} from "./components/pokemon-detail/pokemon-detail.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";



const  redirectLoggedInToSite = () =>  redirectLoggedInTo(['']);
const  redirectUnauthorizedToLogin = () =>  redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: '', component: PokemonSearchPageComponent, canActivate:[AuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard], data: {authGuardPipe:  redirectLoggedInToSite} },
  { path: 'signup', component: SignupPageComponent, canActivate: [AuthGuard], data: {authGuardPipe:  redirectLoggedInToSite} },
  { path: 'pokemon', component: PokemonDetailComponent, canActivate: [AuthGuard], data: {authGuardPipe:  redirectUnauthorizedToLogin} },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
