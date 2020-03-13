import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"

import { Angular2CsvModule } from 'angular2-csv';

@Component({
  selector: 'app-unemployment-list',
  templateUrl: './unemployment-list.component.html',
  styleUrls: ['./unemployment-list.component.css']
})
export class UnemploymentListComponent implements OnInit {
  unemployentList  = [] ;
  employementList = [] ;

  showUnemployment :boolean = false ;
  showEmployment :boolean = true ;

 

  options = {
    title: 'Employed List',
    fieldSeparator: ',',
     quoteStrings: '"',
     decimalseparator: '.',
     showLabels: true,
     showTitle: true,
     useBom: true,
     headers: ['Name', 'Age', 'Id']
   
  }


  unemplyedOptions = {
    title: 'UemploymentList',
    fieldSeparator: ',',
     quoteStrings: '"',
     decimalseparator: '.',
     showLabels: true,
     showTitle: true,
     useBom: true,
     headers: ['Name', 'Age', 'Id']
   
  }

  unemployeddata = [] ;
  
  dataa = [
    
   ]
  constructor(public data:DataService) { 
 
    this.data.getEmployedList().then((res:any)=>{
      console.log(res)
      for (let index = 0; index < res.length; index++) {
        if(res[index].Employed == "Yes") {
          this.unemployentList.push(res[index]) ;
         let obj = {
           Name:res[index].name ,
           age:res[index].age ,
           id:res[index].key

         }
        this.dataa.push(obj) ;
         console.log(this.dataa)
          console.log(this.unemployentList)
        } else {
          this.employementList.push(res[index]) ;

          let obj = {
            Name:res[index].name ,
            age:res[index].age ,
            id:res[index].key
 
          }
         this.unemployeddata.push(obj) ;
          console.log(this.employementList)
        }
        
      }
      
     
    })


  }

  ngOnInit(): void {

  }

  Employment(){
    document.getElementById("UneploymentList").style.backgroundColor ="thistle";
    document.getElementById("employment").style.backgroundColor="chartreuse" ;
    this.showUnemployment=false ;
    this.showEmployment= true
  }

  UnemploymentList(){
    document.getElementById("UneploymentList").style.backgroundColor ="chartreuse";
    document.getElementById("employment").style.backgroundColor="thistle" ;
    this.showUnemployment=true ;
    this.showEmployment=false ;

  }

  downloadCSV(){

  }
  

}
