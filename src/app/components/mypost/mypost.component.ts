import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {

  constructor(private service:FirebaseService) { }
  item:any;
  userEmail:any;
  userUid:any;
  ngOnInit(): void {
    this.service.getBlogs().valueChanges().subscribe(data => {
      console.log(data);
      this.item=data;
    })
    this.userEmail=localStorage.getItem('userEmail');
    this.userUid=localStorage.getItem('uid')
  }

}
