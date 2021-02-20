var temp = add(6, 3);
function add(a, b) {
    return (a + b);
}
// var temp=add(2,3);
// console.log("Result is "+temp);
var temp1 = function () {
    console.log("Anonymous Function");
};
//  temp1();
//Fat Arrow Function/Arrow Function
var temp2 = function (a, b) {
    return (a + b);
};
// console.log("Addition is "+temp2(4,8));
//Optional parameter Function
function add2(a, b) {
    console.log("Value of a " + a);
    console.log("Value of b " + b);
    console.log("Addition of a+b " + (a + b));
}
// add2(1);
var temp3 = function (a, b) {
    return (a + b);
};
// console.log("addition is "+temp3(10));
//default parameter function
function add3(a, b) {
    if (b === void 0) { b = 4; }
    console.log("Value of a " + a);
    console.log("Value of b " + b);
    console.log("Addition of a+b " + (a + b));
}
// add3(10);
add3(11, 5);
