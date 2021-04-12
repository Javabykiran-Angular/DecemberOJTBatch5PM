import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  incorrect:string='';
  loginObj:any;

  constructor(private service:HttpService,
    private router:Router
    ) { }

  ngOnDestroy(): void {
   document.body.className='';
  }

  ngOnInit() {
    document.body.className="bg-img";
  }

  onSubmit(f){
    let obj={
      email:f.value.email,
      password:f.value.password
    }

    this.service.LoginCheck(obj)
    .subscribe((response)=>{
      console.log(response);
      this.loginObj=(<any>response);
      console.log(this.loginObj.msg);
      if(this.loginObj.msg=='Valid user'){
        this.incorrect=this.loginObj.msg;

        sessionStorage.setItem("username",this.loginObj.user.username);

        this.router.navigate(['/home'])
      }else{
        this.incorrect=this.loginObj.msg;
      }
    })
    
  }

}
