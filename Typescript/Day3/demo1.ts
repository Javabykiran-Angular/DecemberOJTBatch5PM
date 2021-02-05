//number,string,boolean,any,void
// mise undefined & null

var a1:number=10;
var a2:number;
var a3;
a3=20;
console.log("value of a3 is "+a3);
a3='Sumit Raokhande';
console.log("value of a3 is "+a3);
a3=true;
console.log("value of a3 is "+a3);
var a4=null;
console.log("Value of a4 is "+a4);

// type assertion
var temp:any;
// implement type assertion in 2 way
// 1 angle bracket syntax
// 2 as syntax

// 1 implements angle bracket
var temp2= (<string> temp);
// temp2.
// (<string> temp).
// 2 as syntax
var temp3= (temp as string);
// temp3.


