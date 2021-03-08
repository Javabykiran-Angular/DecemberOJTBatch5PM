import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdirective',
  templateUrl: './switchdirective.component.html',
  styleUrls: ['./switchdirective.component.css']
})
export class SwitchdirectiveComponent implements OnInit {

  mycolor:string='black';
  constructor() { }

  ngOnInit() {
  }

  onClick(value){
    
    // if(value== ''){
    //   this.mycolor='black';
    // }else
    // {
    //   this.mycolor=value;
    // }
    this.mycolor=value;

    
    // console.log("Color is "+this.mycolor);
  }

}
