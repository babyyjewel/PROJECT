"use strict";
var Employee = /** @class */ (function () {
    function Employee(a, b, c) {
        this.empid = a;
        this.firstname = b;
        this.lastname = c;
    }
    return Employee;
}());
var emp = new Employee(102, "Ramesh", "John");
//emp.empid=102;
//emp.firstname="harry";
//emp.lastname="jen";
console.log(emp);
