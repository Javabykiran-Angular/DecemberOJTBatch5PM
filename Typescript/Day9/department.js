"use strict";
exports.__esModule = true;
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(role) {
        this.role = role;
    }
    Department.prototype.setRole = function (r) {
        this.role = r;
    };
    Department.prototype.getRole = function () {
        return (this.role);
    };
    return Department;
}());
exports.Department = Department;
