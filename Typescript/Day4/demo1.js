// 1 Function without argument & without return type
// 2 Function with argument & without return type
// 3 Function without argument & with return type
// 4 Function with argument & with return type
function add() {
    console.log("Addition is " + (2 + 3));
}
//add();
// add1(4,5);
function add1(a, b) {
    console.log("Addition is " + (a + b));
}
function add2() {
    return (5 + 5);
}
var res = add2();
// console.log("Addition is "+res);
// console.log("Addition is "+add2());
//4
function add3(a, b) {
    return (a + b);
}
console.log("Addition is " + add3(7, 7));
