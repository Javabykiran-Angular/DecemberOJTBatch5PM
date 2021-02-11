//optional parameter func
function add(a, b) {
    console.log("value of a is " + a);
    console.log("value of b is " + b);
    console.log("Addition of a+b is " + (a + b));
}
//add(2,3);
// add(4);
var temp = function (a, b) {
    console.log("value of a is " + a);
    console.log("value of b is " + b);
    console.log("Addition of a+b is " + (a + b));
};
// temp(5);
//Default parameter function
function add2(a, b) {
    if (b === void 0) { b = 4; }
    console.log("value of a is " + a);
    console.log("value of b is " + b);
    console.log("Addition of a+b is " + (a + b));
}
// add2(1);
add2(2, 7);
