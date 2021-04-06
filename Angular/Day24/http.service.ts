import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BaseUrl:string='http://localhost:8080/api/';

  constructor(private http:HttpClient) { }


  GetAllEmployee(){
   return  (this.http.get(`${this.BaseUrl}getallemployee`));
  }

  GetParticularEMP(id){
     return (this.http.get(`${this.BaseUrl}getemployeebyid/${id}`));
  }

  

}
