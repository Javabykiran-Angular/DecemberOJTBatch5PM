
//operator
//arithematic (+,-,*,/,%)
//logical (&&,||,^,~,!=)
// bitwise (>>,<<,& ,| ,!,^)
// inc& dec (++,--, pre, post)
// ternary [condition?expression1:expression2];
// assignment =
// ==, ===

var res=2<4?'hi':'bye';

// console.log("Value of res "+res);
//control statement if,if-else,if-sleif-else,switch,contine,break
// loop for,while,do-while,foreach
var rating:number=3;
// if(rating<5){
//     console.log("Condition is true");
// }else{
//     console.log("condition is false");
// }
var str:string='sumit';
// if(str === 'sumit'){
//     console.log("value of str is "+str);
// }else{
//     console.log("condition is false");
// }
var str1:any='sumit';
// console.log("data type is "+typeof str1);

// if(str1 === 'sumit' ){
//     console.log("Condition is true");
// }else{
//     console.log("condition is false");
// }

// if(str1 === str ){
//     console.log("Condition is true");
// }else{
//     console.log("condition is false");
// }

var choice:number=22;
// switch(choice){
//     case 1:console.log("case 1 is excute");
//             break;
//     case 2:console.log("case 2 is excute");
//             break;
//     default : console.log("case default is excute");    
// }

var rating=4;
// while(rating!=0){
//     // console.log("value of rating "+rating);
//     rating--;
// }

// do{
//     console.log("value of rating is "+rating);
// rating++;

// }while(rating<=5);

for(var i=0;i<5;i++){
    console.log("Value of I is "+i);
}

console.log("------------------------------");
console.log("Value of i outside the for loop "+i);
// var has global scope
// let => scope has nearest within the block
for(let j=0;j<4;j++){
    console.log("value of j is "+j);
}

// console.log("outside block "+j);
//var, let ,const 
const k=2; // it has global scope



