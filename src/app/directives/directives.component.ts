import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  bookOffer: boolean = true;
  viewmode: string = 'grid';
  courses:any [] = [];
  offer1:boolean = true;
  offer2:boolean = true;
  bgColor:string = 'black';
  color:string = 'yellow';

  constructor() { }

  ngOnInit() {
  }

  loadCourses() {
    
    this.courses=[{
      name:"Angular",
      price: 23500,
      status:"Available"

    },{
      name:"Java",
      price: 32000,
      status:"Available"
    },{
      name: "NodeJS",
      price: 10000,
      status:"Not Available"
    }]


  }




}
