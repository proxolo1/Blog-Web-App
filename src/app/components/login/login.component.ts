import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fauth:AuthService) { }
  email!:string;
  password!:string;
  ngOnInit(): void {
  }
  login(){
    this.fauth.signIn(this.email,this.password)
  }
}
