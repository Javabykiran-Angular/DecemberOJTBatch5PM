import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strdetails:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nobis, quisquam expedita vitae unde dolore recusandae placeat doloremque? Consectetur facilis repudiandae quibusdam dolorem sequi facere hic quisquam adipisci dignissimos accusantium.";

  num1:number=4;
  num2=4.57845236;
  mydate=new Date();
  constructor() { }

  ngOnInit() {
  }

}
