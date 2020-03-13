import { Component, OnInit } from '@angular/core';
declare var firebase ;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signup(username, email , password){
    firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
      console.log("successful")
    }).catch((error)=>{
      console.log(error.message)
    })
  }

}
