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
  i: number = 0;
  data: any;
  text: any = "Hello,  Welcome"
  searchValue!: string;
  user: any = "please login";
  key: any;
  welcome: any;
  header: any;
  check: any = {
    time: false,
    title: false
  }
  ngOnInit(): void {
    this.checkTime();
    this.getItems(-1);

  }
  getItems(val: any) {
    this.service.getAll().valueChanges().subscribe(data => {
      // if(val!== null){
      //   this.data = data.sort(() => {
      //   return val;
      //   })
      // }
      console.log(data)

      switch (val) {
        case true:
          this.data = data.sort((a: any, b: any) => {
            return a.title.localeCompare(b.title);
          });
          break;
        case false:
          this.data = data.sort((a: any, b: any) => {
            return b.title.localeCompare(a.title);
          });
          break;
        case 'search':
          this.data = data.filter((a: any) =>
            a.title.toLowerCase().includes(this.searchValue.toLocaleLowerCase())
            || a.user.toLowerCase().includes(this.searchValue.toLocaleLowerCase())).reverse();
          break;
        default:
          this.data = data.sort(() => {
            return val;
          });
          break;

      }

      let element = <HTMLElement>document.querySelector('.spinner');
      element!.style.display = "none";
      this.pageScroll();
    })
    this.user = localStorage.getItem('userEmail')!.match(/^([^@]*)@/)![1];
  }

  timeSort() {
    this.checkToggle('title', 'default')
    if (!this.check.time) {
      this.getItems(1);
      this.check.time = true;
      return;
    }
    this.getItems(-1);
    this.check.time = false;
  }
  titleSort(event: any) {
    this.checkToggle('default', 'time')
    this.getItems(event.currentTarget.checked);
  }
  default() {
    this.checkToggle('title', 'time');
    this.getItems(-1);
  }
  checkToggle(check1: any, check2: any) {
    check1 = <HTMLInputElement>document.getElementById(`${check1}`);
    check2 = <HTMLInputElement>document.getElementById(`${check2}`);
    check1!.checked = false;
    check2!.checked = false;
  }
  search() {
    this.getItems('search')
  }
  pageScroll() {
    setTimeout(() => {
      window.scrollTo(0, 740);

    }, 100)
  }
  textWrite(txt: string) {

    if (this.i < txt.length) {
      document.getElementById('text')!.innerHTML += txt.charAt(this.i);
      this.i++;
      setTimeout(() => this.textWrite(txt), 100)
      // this.textWrite()
    }
  }
  checkTime(){
    const time = new Date().getHours();
    if (time >= 1 && time <= 6) {
      this.text = " Hey, isn't it too early to be using your computer";
    }
    else if (time >= 7 && time <= 11) {
      this.text = "Good Morning";
    }
    else if (time >= 12 && time <= 14) {
      this.text = " Have you eaten lunch yet?"
    }
    else if (time >= 15 && time <= 16) {
      this.text = "Good Afternoon";
    }
    else if (time >= 17 && time <= 22) {
      this.text = "Good Evening! Welcome to prime time on the web!";
    }
    else if (time == 23) {
      this.text = "It's almost midnight...Aren't you sleepy yet?";
    }
    else if (time == 0) {
      this.text = "It's midnight... do you ever sleep?";
    }
    this.textWrite(this.text)
  }
}
