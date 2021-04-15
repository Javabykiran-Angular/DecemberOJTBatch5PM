import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  allCountry=[];
  constructor(private service:HttpService,private router:Router) { }

  ngOnInit() {
    this.getAllCountry();
  }

  getAllCountry(){
    this.service.GetAllCountries()
    .subscribe((response)=>{
      console.log(response);
      this.allCountry=(<any>response);
    })
  }

  onSubmit(f){

    let empobj={
      name:f.value.name,
    departmentit:f.value.departmentit,
    status:f.value.status,
    phoneno:f.value.phoneno,
    country:{
      cid:f.value.country.cid,
      cname:f.value.country.cname

    },
    createddtm:Date.now(),
    createdby:sessionStorage.getItem("username"),
    updateddtm:Date.now(),
    updatedby:sessionStorage.getItem("username")
};

  this.service.AddEmployee(empobj)
  .subscribe((response)=>{
    console.log(response);
    this.router.navigate(['/home']);

  })

  }

}
