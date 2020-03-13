import { Component, OnInit } from '@angular/core';

import { Angular2CsvModule } from 'angular2-csv';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

declare var firebase ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  options = {
    title: 'Computer Class List',
    fieldSeparator: ',',
     quoteStrings: '"',
     decimalseparator: '.',
     showLabels: true,
     showTitle: true,
     useBom: true,
     headers: ['Name', 'Surname', 'Id' , "Contact number"]
   
  }

  computerClassList = [] ;
  List = [] ;


  constructor() { 
    var userId = firebase.auth().currentUser.uid ;
   

    firebase.database().ref("Computer classes/"+userId).on('value', (data: any) => {
      var List = data.val();
       // console.log(data.val());
        var keys: any = Object.keys(List);
        for(var i = 0; i < keys.length; i++){
          var k = keys[i];
          let obj ={
              
              name: List[k].Name,
              email: List[k].Surname,
              key: k,
              date: List[k].Id,
              Surname :List[k].Surname ,
              Contact :List[k].Contact_of_next_of_kin ,
              NextOfContact :List[k].Contact_of_next_of_kin ,
              Address:List[k].House_number 

          }

          let ob = {
            name: List[k].Name,
              email: List[k].Surname,
              key: k,
              Contact :List[k].Contact_of_next_of_kin 
          }
        this.computerClassList.push(obj) ;
        this.List.push(ob) ;
        
        }
        console.log(this.computerClassList)

       
    })
  }

  ngOnInit(): void {
  }

}
