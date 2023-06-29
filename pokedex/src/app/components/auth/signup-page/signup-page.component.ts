import {Component, inject} from '@angular/core';
import {Auth, createUserWithEmailAndPassword} from "@angular/fire/auth";
import {auth} from "firebaseui";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  auth = inject(Auth)

  email = '';
  password = '';

  createWithEmailAndPassword(){
    createUserWithEmailAndPassword(this.auth , this.email, this.password)
      .then((userCredential) => {
        const user = userCredential.user;

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

      })

  }
}
