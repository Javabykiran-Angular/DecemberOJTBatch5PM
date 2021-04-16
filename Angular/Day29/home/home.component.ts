import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Employee } from '../EmployeeInterface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmpData:any[]=[];
  isradio:boolean=false;

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

  modalRef: BsModalRef;  


  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };

  constructor(private service:HttpService,
    private router:Router,
    private modalservice:BsModalService) { }

  ngOnInit() {
    this.GetAllEMP();
  }

  GetAllEMP(){

    this.service.GetAllEmployee()
    .subscribe((response)=>{
      console.log(response);
      this.EmpData=(<any>response);
    })
  }

  onAddEmployee(){
    // addemployee
    this.router.navigate(['/addemployee']);
  }

  isradioCheck(){
    if(this.isradio){
      return true;
    }else{
      return false;
    }
  }

  OnRadioClick(item){
    console.log(item);
    this.isradio=true;
    this.empobj=item;
  }

  onUpdateEmployee(popup: TemplateRef<any>){
    if(this.isradioCheck()){
      // update emp code
      // alert('Employee is selected.......')
      this.modalRef = this.modalservice.show(        
        popup, this.config);

    }else{
      //display the msg
      alert('Please Select the Employee');
    }
  }


}
