"use strict";
exports.__esModule = true;
exports.pi = exports.add = exports.MyClass = void 0;
var MyClass = /** @class */ (function () {
    function MyClass(fname, lname, id) {
        this.fname = fname;
        this.lname = lname;
        this.id = id;
    }
    MyClass.prototype.display = function () {
        console.log("\n            First Name :: " + this.fname + "\n            Last Name :: " + this.lname + "\n            ID        :: " + this.id + "\n       ");
    };
    return MyClass;
}());
exports.MyClass = MyClass;
// var obj=new MyClass(); //tsc 
// obj.display();
// var obj=new MyClass("Sumit","Raokhande",9); 
// obj.display();
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;
