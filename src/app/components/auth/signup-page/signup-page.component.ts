import {Component, inject} from '@angular/core';
import {Auth, createUserWithEmailAndPassword} from "@angular/fire/auth";
import {auth} from "firebaseui";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  auth = inject(Auth)

  email = '';
  password = '';

  constructor(
    public router: Router,
  ) {}

  createWithEmailAndPassword(){
    createUserWithEmailAndPassword(this.auth , this.email, this.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.redirectToSite()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

      })

  }

  redirectToSite(){
    this.router.navigate(['/'])
  }
}
