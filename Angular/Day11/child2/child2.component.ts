import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() datafromchild = new EventEmitter();

  @Output() jsondatafromChild=new EventEmitter();

  strdata:string='Data from child...';

  jsondata={
    fname:'Sumit',
    id:3,
    rollno:9
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    // this.datafromchild.emit(this.strdata);

    this.jsondatafromChild.emit(this.jsondata);
  }

}
