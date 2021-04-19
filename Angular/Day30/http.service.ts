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

  LoginCheck(loginObj){
     return  (this.http.post(this.BaseUrl+'logincheck',loginObj));
  }

  GetAllCountries(){
    return (this.http.get(`${this.BaseUrl}getallcountry`));
  }

  AddEmployee(obj){
    return (this.http.post(`${this.BaseUrl}addemployee`,obj,{responseType:'text'}));
  }

  UpdateEmployee(obj){
     return (this.http.put(`${this.BaseUrl}updateemployee`,obj,{responseType:'text'}));
  }

  DeleteEmployee(id){
      return  (this.http.delete(`${this.BaseUrl}deleteemployee/${id}`,{responseType:'text'}));
  }
  

}
