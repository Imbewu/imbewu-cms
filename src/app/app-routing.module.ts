import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component" ;
import {HomeComponent} from "./home/home.component"
import {StatsComponent} from "./stats/stats.component" ;
import {NavbarComponent} from './navbar/navbar.component'
import {UnemploymentListComponent} from "./unemployment-list/unemployment-list.component" ;
import {OpportunitiesComponent } from "./opportunities/opportunities.component" ;

const routes: Routes = [
  {path:""  , component:LoginComponent} ,
  {path:"signup"  , component:SignupComponent} ,
  {path:"home"  , component:HomeComponent} ,
  {path:"stats"  , component:StatsComponent} ,
  {path:'computerilliterate'  , component:NavbarComponent} ,
  {path:"unemploymentList" , component:UnemploymentListComponent} ,
  {path:"opportunities"  , component:OpportunitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
