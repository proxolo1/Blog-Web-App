import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService:AuthService) { }
  email:any=localStorage.getItem('userEmail')
  password!:string;
 
  ngOnInit(): void {
  }
  register(){
    this.authService.signUpEmailAndPassword(this.email,this.password)
  }
  googleSignIn(){
    this.authService.googleAuth();
  }
}
