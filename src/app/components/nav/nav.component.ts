import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() {
    
   }
   
  ngOnInit(): void {
    this.checkButton();
  }
 checkButton(){
   if(localStorage.getItem('userEmail')!=null){
    document.getElementById('login')!.style.display = 'none';
     document.getElementById('profile')!.style.display='block';
   }
   
   console.log('nav workd')
 }
logout() {
  localStorage.clear();
  this.checkButton();
  location.reload()
}
code(){
  window.open('https://github.com/proxolo1/Blog-Web-App',"","width:100,height:100");
}
} 

