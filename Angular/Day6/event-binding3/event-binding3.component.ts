import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding3',
  templateUrl: './event-binding3.component.html',
  styleUrls: ['./event-binding3.component.css']
})
export class EventBinding3Component implements OnInit {
  mybackground:string='';
  textcolor:string='black';
  textcolor1:string='black';
  textcolor2:string='black';
  textcolor3:string='black';

  constructor() { }

  ngOnInit() {
  }
  onClick(value){
    if(value=='red'){
      this.mybackground='red';
      this.textcolor='red';
      this.textcolor1='black';
     this.textcolor2='black';
     this.textcolor3='black';
    }else if(value=='green'){
      this.mybackground='green';
      this.textcolor1="green";
      this.textcolor='black';
     this.textcolor2='black';
     this.textcolor3='black';
    }else if(value=='blue'){
      this.mybackground='blue';
      this.textcolor2="blue";
    }else{
      this.mybackground='yellow';
      this.textcolor3="yellow";
    }
  }

}
