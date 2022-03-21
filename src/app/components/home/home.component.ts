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
          case true: 
          this.data=data.sort((a:any,b:any)=>{
            return a.title.localeCompare(b.title);
          });
          break;
          case false: 
          this.data=data.sort((a:any,b:any)=>{
            return b.title.localeCompare(a.title);
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
    this.checkToggle('title','default')
    if (!this.check.time) {
      this.getItems(1);
      this.check.time = true;
      return;
    }
    this.getItems(-1);
    this.check.time = false;
  }
  titleSort(event:any) {
    this.checkToggle('default','time')
    this.getItems(event.currentTarget.checked);
  }
  default(){
    this.checkToggle('title','time');
    this.getItems(-1);
  }
  checkToggle(check1:any,check2:any){
     check1=<HTMLInputElement>document.getElementById(`${check1}`);
     check2=<HTMLInputElement>document.getElementById(`${check2}`);
    check1!.checked=false;
    check2!.checked=false;
  }
}
