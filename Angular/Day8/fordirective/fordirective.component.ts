import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Angular 8','React Js','Vue JS','JSP'];
  
  arrobj=[
    {
      name:'Motorolla',
      price:15000,
      quantity:1
    },
    {
      name:'Samsung',
      price:20000,
      quantity:2
    },
    {
      name:'Xamomi',
      price:20000,
      quantity:1
    },
    {
      name:'One Plus',
      price:30000,
      quantity:1
    },
    {
      name:'Realme',
      price:22000,
      quantity:3
    }
  ];

  selectName:string='';
  constructor() { }

  ngOnInit() {
  }

  onMouseover(item){
    // console.log("Mouse over Event Occur!!!!");
    this.selectName=item.name;
  }

  onMouseOut(){
    this.selectName='';
  }

}
