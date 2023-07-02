import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonListComponent} from "./components/pokemon-list/pokemon-list.component";
import {LoginPageComponent} from "./components/auth/login-page/login-page.component";
import {SignupPageComponent} from "./components/auth/signup-page/signup-page.component";
import {AuthGuard, redirectLoggedInTo,redirectUnauthorizedTo} from "@angular/fire/auth-guard";



const  redirectLoggedInToSite = () =>  redirectLoggedInTo(['']);
const  redirectUnauthorizedToLogin = () =>  redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: '', component: PokemonListComponent, canActivate:[AuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}},
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard], data: {authGuardPipe:  redirectLoggedInToSite} },
  { path: 'signup', component: SignupPageComponent, canActivate: [AuthGuard], data: {authGuardPipe:  redirectLoggedInToSite} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
