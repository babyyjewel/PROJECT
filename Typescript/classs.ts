class Employee{

    empid:number;
    firstname:string;
    lastname:string;
constructor(a:number,b:string,c:string){
    this.empid=a;
    this.firstname=b;
    this.lastname=c;



}


}
let emp = new Employee(102,"Ramesh","John");
//emp.empid=102;
//emp.firstname="harry";
//emp.lastname="jen";
console.log(emp);