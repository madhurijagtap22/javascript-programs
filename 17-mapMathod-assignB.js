
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonail=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahrsh","HR",85000,"Infy");

const arrayEmployees=[emp_anil, emp_radha,emp_rishi,emp_sonail,emp_monika,emp_viny,emp_mahi];

console.log(`=======1.the list of all employee salary===========`);
const employeeSalary=arrayEmployees.map((Employee)=>{
    return Employee.emp_salary
})
console.log(employeeSalary);

console.log(`=======2.the list of all employee departments ===========`);
const employeeDept=arrayEmployees.map((Employee)=>{
    return Employee.emp_dept
})
console.log(employeeDept);

console.log(`=======3.the list of all employee id===========`);
const employeeID=arrayEmployees.map((Employee)=>{
    return Employee.emp_id
})
console.log(employeeID);


