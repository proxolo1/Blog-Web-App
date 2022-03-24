import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {

  constructor(private service:FirebaseService,private auth:AuthService,private router:Router) { }
  item:any;
  userEmail:any;
  userUid:any;
  ngOnInit(): void {
    this.service.getBlogs().valueChanges().subscribe(data => {
      console.log(data);
      this.item=data.reverse();
      let elmt=<HTMLElement>document.querySelector('.spinner');
      elmt!.style.display="none";
    })
    this.userEmail=localStorage.getItem('userEmail');
    this.userUid=localStorage.getItem('uid')
  }
  logout(){
    this.auth.logOut();
    this.router.navigate([''])
  }
}
