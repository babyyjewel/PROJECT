"use strict";
exports.__esModule = true;
exports.Employeee = void 0;
var Employeee = /** @class */ (function () {
    function Employeee(a, b) {
        this.firstname = a;
        this.lastname = b;
    }
    return Employeee;
}());
exports.Employeee = Employeee;
var Emp = new Employeee("Ramesh", "Suresh");
console.log(Emp);
