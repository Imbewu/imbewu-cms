import { Component, OnInit } from '@angular/core';
declare var firebase ;

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Submit(name , subject , date ){
    firebase.database().ref("TrainingOpportunitie").push({
      name:name ,
      subject:subject ,
      date :date 
 

    }).then(()=>{
      console.log("Successfully")
    })
  }

}
