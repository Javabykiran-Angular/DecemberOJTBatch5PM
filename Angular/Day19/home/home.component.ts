import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;
  myusername:string='Sumit Raokhande';
  myjson={
    id:1,
    fname:'Sumit',
    lname:'Raokhande'
  }


  constructor(private router:Router) { }

  ngOnInit() {
  }

  onPage1(){
    this.router.navigate(['/Page1']);
  }

  onPage2(){
    this.myid=8;
    this.router.navigate(['/Page2',this.myid])
  }

  onPage3(){
    this.myid=8;
    this.myusername='Kiran Raokhande';
    this.router.navigate(['/Page3',this.myid,this.myusername])
  }

  onFollower(){
    this.router.navigate(['/Follower']);
  }

  onQueryParam(){
    this.myjson.id=8;
    this.myjson.fname='Spruha';
    this.myjson.lname='Raokhande';
    this.router.navigate(
      ['/QueryParameter'], {queryParams:this.myjson} )

  }

}
