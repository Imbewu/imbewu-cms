import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;

declare var firebase ;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  login(email , password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      this.router.navigateByUrl('/home')
    }).catch((error)=>{
      console.log(error.message)
    })
  }

}