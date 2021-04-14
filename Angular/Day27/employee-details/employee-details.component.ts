import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../EmployeeInterface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  empobj:Employee={
    id:0,
      name:'',
      departmentit:'',
      status:'',
      phoneno:0,
      country:{
        cid:0,
        cname:''
      },
      createddtm:0,
      createdby:'',
      updateddtm:0,
      updatedby:''
  };



  constructor(private routes:ActivatedRoute,
    private service:HttpService) { }

  ngOnInit() {
    this.ParseUrl();
  }

  ParseUrl(){
    this.routes.paramMap
    .subscribe((param)=>{
    //  console.log("id is "+param.get('id'));

      this.GetParticularEmployee(param.get('id'))

    });
  }
status:string='';
  GetParticularEmployee(id){
      this.service.GetParticularEMP(id)
      .subscribe((response)=>{
        console.log(response);
        this.empobj=(<any>response)
       
      })
  }


}
