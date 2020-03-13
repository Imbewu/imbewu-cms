import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnemploymentListComponent } from './unemployment-list/unemployment-list.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { Angular2CsvModule } from 'angular2-csv';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    StatsComponent,
    NavbarComponent,
    UnemploymentListComponent,
    OpportunitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    Angular2CsvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
