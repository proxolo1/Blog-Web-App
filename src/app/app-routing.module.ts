import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MypostComponent } from './components/mypost/mypost.component';
import { NavComponent } from './components/nav/nav.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  {path:'addpost',component:AddPostComponent,canActivate:[AuthGuardService]},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'sign-in',component:SignInComponent},
  {path:'login',component:LoginComponent},
  {path:'nav',component:NavComponent},
  {path:'mypost',component:MypostComponent,canActivate:[AuthGuardService]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
