//annonymous function
var temp = function () {
    console.log("Funct without arg & without Return");
};
// temp();
//4 funct with arg & with return type
var temp1 = function (a, b) {
    return (a + b);
};
//  console.log("Addition is "+temp1(2,3));
// Fat arrow function/ Arrow function
var temp3 = function () {
    console.log("basic Funct Has 1st type");
};
// temp3();
// implement 4 type of fun. using fat arrow funct
var temp4 = function (a, b) {
    return (a + b);
};
console.log("Result is " + temp4(2, 5));
