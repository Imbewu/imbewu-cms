import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from "../data.service"

declare var firebase;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  chart = []; // This will hold our chart info
  @ViewChild('lineChart', { static: true }) private chartRef;
  canvas: any;
  ctx: any;

  unemploymentcanvas: any;
  unemploymentctx: any;

  gendercanvas :any ;
  genderctx :any ;



  temparry = [];
  employList = [] ;
  GenderArray = [] ;

  CountYes = 0;
  CountNo = 0;

  CountEmployedList = 0 ;
  CountNoEmployedList = 0 ;

  CountMale = 0 ;
  CountFemale ;
  constructor(private data: DataService) { }


  ngAfterViewInit() {



    this.chartJsForComputerLetiracy();
    this.unemployementChart();
    this.genderPie() ;

  }
  ngOnInit() {


  }

  chartJsForComputerLetiracy() {
    this.data.getComputerClasses().then((res: any) => {
      console.log(res);
      this.temparry = res;
      for (let index = 0; index < this.temparry.length; index++) {

        if(this.temparry[index].computer == "Yes"){
          this.CountYes = this.CountYes + 1 ;
        } else {
          this.CountNo = this.CountNo + 1
        }
      }
      this.canvas = document.getElementById('myChart');
      this.ctx = this.canvas.getContext('2d');
      let chart = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: ["Computer Literate", "ComputerIliterate",],
          datasets: [
            {
              data: [this.CountYes, this.CountNo],

              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              fill: true
            },

          ]
        },

      });
    })

  }


  unemployementChart() {
    this.data.getEmployedList().then((res:any)=>{
      console.log(res)
      this.employList = res ;
      for (let index = 0; index < this.employList.length; index++) {
        if(this.employList[index].computer == "Yes") {
          this.CountEmployedList = this.CountEmployedList + 1 ;
        } else {
          this.CountNoEmployedList = this.CountNoEmployedList + 1 
        }
      }

      this.unemploymentcanvas = document.getElementById('unemploymentChart');
      this.unemploymentctx = this.unemploymentcanvas.getContext('2d');
      let chart = new Chart(this.unemploymentctx, {
        type: 'pie',
        data: {
          labels: ["Employed", "Unemployed",],
          datasets: [
            {
              data: [this.CountEmployedList, this.CountNoEmployedList],
  
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              fill: true
            },
  
          ]
        },
  
      });
    })
   
  }

  genderPie(){
    this.data.getComputerClassesList().then((res:any)=>{
      console.log(res)
      this.GenderArray = res ;
      for (let index = 0; index < this.GenderArray.length; index++) {
        if(this.GenderArray[index].Gender.toLowerCase() == "male") {
          this.CountMale = this.CountMale + 1 ;
        } else {
          this.CountFemale = this.CountFemale + 1 
        }
      }

      this.gendercanvas = document.getElementById('genderChart');
      this.genderctx = this.gendercanvas.getContext('2d');
      let chart = new Chart(this.genderctx, {
        type: 'pie',
        data: {
          labels: ["Male", "Femaile"],
          datasets: [
            {
              data: [this.CountMale , this.CountFemale],
  
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              fill: true
            },
  
          ]
        },
  
      });
    })
   
  }

}