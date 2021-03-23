import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  post:any[]=[];
  constructor(private service:HttpService) { }

  ngOnInit() {

    this.service.getPost()
    .subscribe((response)=>{
        console.log(response);
        this.post=(<any>response);
    })
  }

  OnSend(mytitle,mybody){
    let obj={
      title:mytitle,
      body:mybody
    }
    this.service.postData(obj)
    .subscribe((respose)=>{
      console.log(respose);
    })
  }

}
