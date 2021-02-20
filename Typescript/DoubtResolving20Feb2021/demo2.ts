var temp=add(6,3);
    
    
    
    function add(a:number,b:number):number {
        return (a+b);
    }

   

    // var temp=add(2,3);
    // console.log("Result is "+temp);

    var temp1=function (){
        console.log("Anonymous Function");
    }

    //  temp1();

    //Fat Arrow Function/Arrow Function

      var temp2=(a:number,b:number):number=>{
            return (a+b);
        }

        // console.log("Addition is "+temp2(4,8));

        //Optional parameter Function

        function add2(a:number,b?:number){
            console.log("Value of a "+a);
            console.log("Value of b "+b);
            console.log("Addition of a+b "+(a+b));
        }
        // add2(1);

        var temp3=(a:number,b?:number):number=>{
            return (a+b);
        }

        // console.log("addition is "+temp3(10));


        //default parameter function

        function add3(a:number,b:number=4){
            console.log("Value of a "+a);
            console.log("Value of b "+b);
            console.log("Addition of a+b "+(a+b));
        }


        // add3(10);
        add3(11,5);
        
