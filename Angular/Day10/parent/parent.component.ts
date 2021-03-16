import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  str:string='Data from parent';

  objJson={
    name:'Sumit Raokhande',
    id:1,
    rollno:9
  }

  datareceived:string='';
  jsondatareceived={};

  constructor() { }

  ngOnInit() {
  }

}
