"use strict";
exports.__esModule = true;
exports.A = void 0;
var A = /** @class */ (function () {
    function A(id, name) {
        this.id = id;
        this.name = name;
    }
    A.prototype.display = function () {
        console.log("\n            id is :: " + this.id + "\n            name  :: " + this.name + "\n        ");
    };
    return A;
}());
exports.A = A;
