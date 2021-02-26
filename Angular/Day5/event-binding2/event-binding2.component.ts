import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  result:number=0;
  constructor() { }

  ngOnInit() {
  }
  
  onClick(input){
    console.log(input);
  }

  onClick1(myinput){
    myinput.style.background='red';
    console.log(myinput.value);
  }

  onAddition(num1,num2){    
    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;
  }

  onChange(myinput4){
    console.log("Change event Occur!!!");
    myinput4.style.background='green';
  }
  onKeyUp(){
    console.log("Key Up Event Occur....")
  }
  onKeydown(){
    console.log("Key down Event Occur....")
  }

}
