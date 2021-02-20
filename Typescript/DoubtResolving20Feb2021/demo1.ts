//data type
// number(int,long,float),string(string,char),boolean(true,false),any,void
// speical undefined & null 
var a:number;
a=3.4;
// console.log("Value of a is "+a);
var a1:string='Sumit Raokhande';
// console.log("Value of a1 is "+a1);
var a2:any;
a2=2.5;
console.log("Value of a2 is "+a2);
a2='Angular 8';
console.log("Value of a2 is "+a2);
//type assertion

var b:string;

var a3:any;
//1 angle bracket
//2 as syntax

var temp=(<string> a3);
// temp.

//as syntax

var temp1=(a3 as string);
// temp1.
