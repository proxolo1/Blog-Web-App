import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: FirebaseService, private auth: AuthService) {
    console.log('component');
    if (this.auth.isGoogle) {
      location.reload();
      this.auth.isGoogle = false;
    }

  }
  data: any;
  user: any = "please login";
  check:any={
    time:false,
    title:false
  }
  ngOnInit(): void {
    this.getItems(-1);
  }
  getItems(val: any) {
    console.log("Loading")
    this.service.getAll().valueChanges().subscribe(data => {
      // if(val!== null){
      //   this.data = data.sort(() => {
      //   return val;
      //   })
      // }
      
      console.log(data)
      // console.log('hello')
      switch (val){
          case null: 
          this.data=data.sort((a:any,b:any)=>{
            return a.title.localeCompare(b.title);
          });
          break;
          default:
            this.data=data.sort(()=>{
              return val;
            });
            break;
      }
      let element = <HTMLElement>document.querySelector('.spinner');
      element!.style.display = "none";
    })
    this.user = localStorage.getItem('userEmail')!.match(/^([^@]*)@/)![1];
  }

  timeSort() {
    if (!this.check.time) {
      this.getItems(1);
      this.check.time = true;
      return;
    }
    this.getItems(-1);
    this.check.time = false;
  }
  titleSort() {
    this.getItems(null);
  }
}
