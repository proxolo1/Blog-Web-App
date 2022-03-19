import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AddPostComponent } from './components/add-post/add-post.component';
// import { RichTextEditorModule,ToolbarService,LinkService,ImageService,HtmlEditorService} from '@syncfusion/ej2-angular-richtexteditor';
import { RichTextEditorModule, ToolbarService, TableService, QuickToolbarService, 
  LinkService, ImageService, HtmlEditorService, MarkdownEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LoginComponent } from './components/login/login.component';
import { MypostComponent } from './components/mypost/mypost.component';
const firebaseConfig = {
  apiKey: "AIzaSyCASzpA2ldLrXv4ewpoARQzWMp42NhLgOA",
  authDomain: "bloog-proxolo.firebaseapp.com",
  projectId: "bloog-proxolo",
  storageBucket: "bloog-proxolo.appspot.com",
  messagingSenderId: "457811131408",
  appId: "1:457811131408:web:394a95535c8d0963e7de95",
  measurementId: "G-3BQP127S8Q"
};
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddPostComponent,
    HomeComponent,
    BlogComponent,
    SignInComponent,
    LoginComponent,
    MypostComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, 
    AngularFireDatabaseModule, 
    FormsModule
  ],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService,
    QuickToolbarService, MarkdownEditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
