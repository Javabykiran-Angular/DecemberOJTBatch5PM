import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string="red";
  rating:number=2;
  mycolor2:string='blueviolet';
  
  objstyle={
    color:'green',
    fontStyle:'italic',
    "font-family":'Courier New, Courier, monospace'
  }

  constructor() { }

  ngOnInit() {
  }

}
