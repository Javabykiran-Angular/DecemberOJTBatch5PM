import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
    name:string='Sumit Raokhande';
    status:boolean=true;
    num1:number=10;
    num2:number=20;
    imgUrl:string="../../assets/bg.jpeg";
    name2:string="Spruha Raokhande";
  constructor() { }

  ngOnInit() {
  }

}
