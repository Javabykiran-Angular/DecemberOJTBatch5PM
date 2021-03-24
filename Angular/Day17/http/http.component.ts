import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  post:any[]=[];

  id:string='';
  title:string='';
  body:string='';
  ishidden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit() {

    this.service.getPost()
    .subscribe((response)=>{
        console.log(response);
        this.post=(<any>response);
    },(error)=>{
      alert('Server is not available...');
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

  onUpdate(item){
    console.log(item.id);
    console.log(item.title);
    console.log(item.body);

      this.id=item.id;
      this.title=item.title;
      this.body=item.body;
      this.ishidden=false;

  }

  OnFinalUpdate(){

    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response);
      this.id='';
      this.title='';
      this.body='';
      this.ishidden=true;
    });

  }

  OnDelete(id){
    this.service.DeleteData(id)
    .subscribe((response)=>{
        console.log(response);
    })
  }

}
