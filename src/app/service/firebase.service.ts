import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  list!:AngularFireList<any>;
  listAll!:AngularFireList<any>
  constructor(private db:AngularFireDatabase) {
   this.list= this.getBlogs();
   this.listAll=this.getAll();
   }

  BlogContent(title:string, content:any){
    let user=localStorage.getItem('userEmail');
    this.list.push({
      title:title,
       content:content,
        time:new Date().toLocaleTimeString(),
         date:new Date().toLocaleDateString(),
         user:user!.match(/^([^@]*)@/)![1]
      });
      this.listAll.push({
        title:title,
        content:content,
         time:new Date().toLocaleTimeString(),
          date:new Date().toLocaleDateString(),
          user:user!.match(/^([^@]*)@/)![1]
      })
  }
  getBlogs(){
    return this.db.list(`${localStorage.getItem('uid')}`)
  }
  getAll(){
    return this.db.list('blogs');
  }

}
