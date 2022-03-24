import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavComponent } from '../components/nav/nav.component';
import { auth } from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uid: any;
  user: any;
  isGoogle: boolean=false;
  constructor(private auth: AngularFireAuth, private router: Router) { }
  signUpEmailAndPassword(email: string, password: string) {
    this.auth.auth.createUserWithEmailAndPassword(email, password)
      .then((userCrediential) => {
        console.log(userCrediential);
        this.router.navigate(['login']);
      }).catch((error) => {
        alert(error.message);
      })
  }
  logOut() {
    console.log('logout')
    this.auth.auth.signOut();
    localStorage.clear();
  }
  signIn(email: string, password: string) {
    this.auth.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        // console.log(response);
        localStorage.setItem('uid', response.user!.uid);
        this.user = response.user!.email;
        localStorage.setItem('userEmail', this.user);
        this.router.navigate(['home']);
        new NavComponent().checkButton();
       
      }).catch(error => {
        console.log(error);
        alert(error.message);
      })
  }
  googleAuth() {
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(response => {
      console.log(response);
      localStorage.setItem('userEmail', response.user!.email!);
      localStorage.setItem('uid', response.user!.uid);
       new NavComponent().checkButton();
      this.isGoogle=true;
      this.router.navigate(['home']);
     
    }).catch((err) => {
      alert(err)
    })
  }
  isLoggedIn() {
    if(localStorage.getItem('userEmail')!==null){
      return true;
    }
     return false;
  }
}
