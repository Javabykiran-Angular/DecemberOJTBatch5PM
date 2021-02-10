
//annonymous function

var temp=function (){
    console.log("Funct without arg & without Return");
}

// temp();
//4 funct with arg & with return type

 var temp1=function (a:number,b:number):number{
        return (a+b);
 }

//  console.log("Addition is "+temp1(2,3));

// Fat arrow function/ Arrow function

  var temp3=()=>{
        console.log("basic Funct Has 1st type");
    }

    // temp3();
// implement 4 type of fun. using fat arrow funct
   var temp4= (a:number,b:number):number=>{
        return (a+b);
   }

   console.log("Result is "+temp4(2,5));

   //optional parameter funct.
   //Default paramater funct
   
   // Rest Parameter funct.

