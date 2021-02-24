import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
myclass:string="success";

rating:number=21;
iserror:boolean=true;
isspecial:boolean=true;

objclass={
  "success":this.iserror,
  "danger":!this.iserror,
  "special":this.isspecial
}

  constructor() { }

  ngOnInit() {
  }

}
