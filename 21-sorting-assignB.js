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

console.log(`============== 1.Descending order of employee id=================`);
const employeeID=arrayEmployees.sort((e1,e2)=>{
    return e1.emp_id<e2.emp_id ? 1: -1;
})
for (const element of employeeID) {
    console.log(`${element.emp_id} || ${element.emp_name} || ${element.emp_dept}`); 
}


console.log(`============== 2.Aescending order of employee Dept=================`);
const employeeDept=arrayEmployees.sort((e3,e4)=>{
    return e3.emp_dept>e4.emp_dept ? 1: -1;
})
for (const element of employeeDept) {
    console.log(`${element.emp_id} || ${element.emp_dept} || ${element.emp_company}`); 
}

console.log(`============== 3.Descending order of employee salary=================`);
const employeeSalary=arrayEmployees.sort((e1,e2)=>{
    return e1.emp_id<e2.emp_id ? 1: -1;
})
for (const element of employeeSalary) {
    console.log(` ${element.emp_name} || ${element.emp_salary}  || ${element.emp_dept}`); 
}

