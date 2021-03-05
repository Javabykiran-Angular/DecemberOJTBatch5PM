import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding3',
  templateUrl: './event-binding3.component.html',
  styleUrls: ['./event-binding3.component.css']
})
export class EventBinding3Component implements OnInit {
  mybackground:string='';
  textcolor:string='black';
  name:string='';
 

  constructor() { }

  ngOnInit() {
  }
  onClick(value){
    this.mybackground=value;
    this.textcolor=value;
    // if(value=='red'){
    //   // this.mybackground='red';
    //   // this.mybackground=value;
    //   this.textcolor='red';
    
    // }else if(value=='green'){
    //   this.mybackground='green';
      
    // this.textcolor="green";
  
    // }else if(value=='blue'){
    //   this.mybackground='blue';
    //   this.textcolor="blue";
    
    // }else{
    //   this.mybackground='yellow';
    //   this.textcolor="yellow";
      
    // }
  }

}
