import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:FirebaseService) { }
  data:any;
  user:any="please login"
  ngOnInit(): void {
    this.service.getAll().valueChanges().subscribe(data => {
      this.data=data;
      console.log(data) 
      console.log('hello')
    })
    this.user=localStorage.getItem('userEmail')!.match(/^([^@]*)@/)![1]
  }

}
