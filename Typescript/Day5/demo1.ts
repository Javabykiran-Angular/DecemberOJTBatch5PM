//optional parameter func
function add(a:number,b?:number){
    console.log("value of a is "+a);
    console.log("value of b is "+b);
    console.log("Addition of a+b is "+(a+b));
}

//add(2,3);
// add(4);

var temp=(a:number,b?:number)=>{
    console.log("value of a is "+a);
    console.log("value of b is "+b);
    console.log("Addition of a+b is "+(a+b));
}

// temp(5);

//Default parameter function

function add2(a:number,b:number=3){
    console.log("value of a is "+a);
    console.log("value of b is "+b);
    console.log("Addition of a+b is "+(a+b));
}

// add2(1);
add2(2,7);
add2(8,8);

//Rest Parameter