import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  count:number=0;
  result:number=0;
  name:string='';

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    if(this.count==0){
      console.log("Event Occur!!!");
      this.count++;
    }
  
  }

  onClick2(){
    console.log("On Image Click....");
  }

  onClcik3(myevent){
    console.log(myevent);
    console.log(myevent.target.value);

  }

  onSend(){
    this.name='Sumit Raokhande';
  }

}
