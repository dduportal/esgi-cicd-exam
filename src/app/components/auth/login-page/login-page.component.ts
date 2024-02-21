import {Component, inject} from '@angular/core';
import {Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "@angular/fire/auth";
import {Router} from "@angular/router";
import errorHandling from "../auth-utils";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  private  auth: Auth = inject(Auth);
  private  provider = new  GoogleAuthProvider();

  email = '';
  password = '';
  error = '';

  constructor(
    public router: Router,
  ) {}


  signInWithEmailAndPassword(){
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        this.redirectToSite()
      })
      .catch((error) => {
        this.error = errorHandling(error.code);
      });
  }

  login() {
    signInWithPopup(this.auth, this.provider).then((result) => {
      this.redirectToSite()
    }).catch((error) => {
      this.error = errorHandling(error.code);
    });
  }

  redirectToSite(){
    this.router.navigate(['/'])
  }

}
