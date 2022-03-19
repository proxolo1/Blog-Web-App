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
   
   disable=false;
  ngOnInit(): void {
    this.checkButton();
  }
 checkButton(){
   if(localStorage.getItem('userEmail')!=null){
    document.getElementById('login')!.style.display = 'none';
     document.getElementById('profile')!.style.display='block';
     document.getElementById('post')!.classList.remove('disabled')
     document.getElementById('myposts')!.classList.remove('disabled')
   }
   
   console.log('nav workd')
 }
logout() {
  localStorage.clear();
  this.checkButton();
  location.reload()
}

} 
