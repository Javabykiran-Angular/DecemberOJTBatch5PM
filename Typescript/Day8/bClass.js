"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.B = void 0;
var aclass_1 = require("./aclass");
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(id, name, address) {
        var _this = _super.call(this, id, name) || this;
        _this.address = address;
        return _this;
    }
    B.prototype.BClass_Display = function () {
        this.display();
        console.log("Address is " + this.address);
    };
    return B;
}(aclass_1.A));
exports.B = B;
