import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {

  jsonobj={
    id:0,
    fname:'',
    lname:''
  }

  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.queryParamMap
    .subscribe((param)=>{
        this.jsonobj.id=+param.get('id');
        this.jsonobj.fname=param.get('fname');
        this.jsonobj.lname=param.get('lname');
    })
  }

}
