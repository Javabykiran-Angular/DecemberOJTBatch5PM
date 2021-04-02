import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdfdemo',
  templateUrl: './tdfdemo.component.html',
  styleUrls: ['./tdfdemo.component.css']
})
export class TdfdemoComponent implements OnInit {

  marks:number=0;

  contactMethod:any[]=[
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
    {id:3,name:'Office Phone'}
  ];

  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
                + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";


  constructor() { }

  ngOnInit() {
  }

  onChange(input){
    let marks=+input.value;
    if(marks>40){
      input.style.color='green';
    }else{
      input.style.color='red';
    }

  }

  onSubmit(f){
    console.log(f.value);

    let jsonobj={
      name:f.value.myusername,
      comment:f.value.comment
    }
    

  }


}
