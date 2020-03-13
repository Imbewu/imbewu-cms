import { Injectable } from '@angular/core';

declare var firebase

@Injectable({
  providedIn: 'root'
})
export class DataService {
computerClassList =  [] ;
unemployedList = [] ;
List = []
  constructor() { }

  getComputerClasses(){
    return new Promise((res , rej)=>{
      var userId = firebase.auth().currentUser.uid ;
    console.log(userId)

    firebase.database().ref("ComputerBasic/"+userId).on('value', (data: any) => {
      var List = data.val();
       // console.log(data.val());
        var keys: any = Object.keys(List);
        for(var i = 0; i < keys.length; i++){
          var k = keys[i];
          let obj ={
              key: k,
              computer: List[k].do_you_computer_basic,
              gender:List[k].Gender
             

          }
        this.computerClassList.push(obj)
        }
        res(this.computerClassList);

       
    })

    })
  }

  getEmployedList(){
    return new Promise((res , rej)=>{
      var userId = firebase.auth().currentUser.uid ;
    console.log(userId)

    firebase.database().ref("unemployed survey/"+userId).on('value', (data: any) => {
      var List = data.val();
       console.log(data.val());
        var keys: any = Object.keys(List);
        for(var i = 0; i < keys.length; i++){
          var k = keys[i];
          let obj ={
              key: k,
              Employed: List[k].Employed,
              age:List[k].Age,
              Name:List[k].Name ,
              Id :List[k].Name ,
             

          }
        this.unemployedList.push(obj)
        }
        console.log(this.unemployedList)
        res(this.unemployedList);

       
    })

    })
  }

  getComputerClassesList(){

    var userId = firebase.auth().currentUser.uid ;
    return new Promise((res, rej)=>{
      firebase.database().ref("Computer classes/"+userId).on('value', (data: any) => {
        var List = data.val();
         // console.log(data.val());
          var keys: any = Object.keys(List);
          for(var i = 0; i < keys.length; i++){
            var k = keys[i];
            let obj ={
                key: k,
                name: List[k].Name,
                email: List[k].Surname,
                date: List[k].Id,
                Surname :List[k].Surname ,
                Contact :List[k].Contact_of_next_of_kin ,
                NextOfContact :List[k].Contact_of_next_of_kin ,
                Address:List[k].House_number  ,
                Gender :List[k].Gender
  
            }
        this.computerClassList.push(obj)
          }

          res(this.computerClassList)
          console.log(this.computerClassList)
  
         
      })
    })
    
  }
}
