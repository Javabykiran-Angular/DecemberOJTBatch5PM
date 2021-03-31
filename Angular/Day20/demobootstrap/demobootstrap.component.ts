import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {

  data:any[]=[
    {
      name:'Samsung',
      decription:'Its Average',
      price:15000,
      quantity:1
    },
    {
      name:'Motorola',
      decription:'Its Good',
      price:25000,
      quantity:1
    },
    {
      name:'OnePlus',
      decription:'Its Awsome',
      price:30000,
      quantity:1
    },
    {
      name:'Nokia',
      decription:'Its good',
      price:10000,
      quantity:2
    },
    {
      name:'LG',
      decription:'Its Good',
      price:22000,
      quantity:1
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
