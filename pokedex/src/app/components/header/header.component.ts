import {Component, inject} from '@angular/core';
import {Auth, onAuthStateChanged, signOut} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  auth = inject(Auth)

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log(user.uid);
      }
      else {

      }
    });
  }

  logout() {
    signOut(this.auth).then((result) => {
      this.redirectToLogin()
    })
      .catch(error => {
        console.log(error)
      })
  }

  private redirectToLogin() {
    this.router.navigate(['/login'])
  }
}
