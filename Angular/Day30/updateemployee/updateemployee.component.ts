import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  @Input() parentdata={
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

  issubmitDissabled:boolean=true;
  backendResponse:string='';
  allCountry=[];

  constructor(private service:HttpService) { }
  ngOnInit() {
    this.GetAllCountry();
  }

  GetAllCountry(){
    this.service.GetAllCountries()
    .subscribe((response)=>{
      this.allCountry=(<any>response);
    });
  }

  onupdate(){
  
    this.parentdata.updatedby=sessionStorage.getItem("username");
    this.parentdata.updateddtm=Date.now();
    // console.log(this.parentdata);

    this.service.UpdateEmployee(this.parentdata)
    .subscribe((response)=>{
      console.log(response)
      this.backendResponse=response;
      this.issubmitDissabled=false;
     
    })

  }

}
