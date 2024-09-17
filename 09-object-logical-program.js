console.log(`===1.WAJ program to list the properties of a JS object=========`);
var student={
    name:"madhuri jagtap",
    sclass:"VI",
    rollNo:12
}
var properties=Object.keys(student)
console.log(properties)

console.log(`====2.Delete the rollno property from the object and print the object before or after the property==`);
 console.log(`before deleting rpllNo: `);
 console.log(student);
 delete student.rollNo;
 console.log(`after deleting rpllNo:`);
 console.log(student);

 console.log(`===3.WAJP to get the length of a JS object===`);
 var car={
    make:"Toyota",
    model:"Camry",
    year:2020,
    color:"blue"
 }
 console.log(Object.keys(car).length);

 console.log(`===4.how to get dynamic access to an object property in JS==`);
 var person={
    name:'John Doe',
    age:30,
    profession:"Developer"
 }
 var propertyName="age"
 console.log(person[propertyName]);

 console.log(`==5.how to modify an object property in an array of object in JS==`);
 var employees=[
    {
        id:1,
        name:'John Doe',
        age:30,
        profession:"Developer",
        salary:50000
    }
 ]
 function updateEmployeeSalary(id,newSalary){
    for (let index = 0; index < employees.length; index++) {
        if (employees[index].id==id) {
            employees[index].salary=newSalary;
            return
        }
    }
 }
 updateEmployeeSalary(1,60000);
 console.table(employees);

 console.log(`===6.how to get the last item of JS object======`);
 console.log(`============ 6.1 using object.keys() method=============`);
 var car={
    make:"Toyota",
    model:"Camry",
    year:2020,
    color:"blue"
 }
 var kays=Object.keys(car);
 var lastKay=kays[kays.length-1];
 console.log(`last property using kays:${lastKay}`);


 console.log(`====7.how to use array that include and check an object aganinst a property of an object`);
 var student=[
    {id:1,name:"John Doe",grade:"A"},
    {id:2,name:"Jane Smith",grade:"B"},
    {id:3,name:"Samuel Green",grade:"C"}
 ];
 function checkStudentExists(id) {
    return student.filter(student=>student.id==id).length>0;
 }
 console.log(checkStudentExists(2));
 console.log(checkStudentExists(4));

console.log(`=======8  how to add an object to an array in JS=========`);
var fruits=["apple","banana","orange"]

var newFruit=   {
                 name:"grape",
                 color:"purple"
                };
fruits.push(newFruit);
console.log(fruits);

console.log(`======9.how to remove duplicates from an array of object using JS=====`);
var students=[
        {id:1,name:"John Doe"},
        {id:2,name:"Jane Smith"},
        {id:1,name:"John Doe"},
        {id:3,name:"Samuel Green"},
        {id:2,name:"Jane Smith"}
]
 function removeDuplicates(arr){
   return arr.filter((student,index,self)=>
    index==self.findIndex((t)=>(
      t.id==student.id&&t.name== student.name
    ))
   
   );
 }
var uniqueStudents=removeDuplicates(student);
console.table(uniqueStudents);

console.log(`=======10.how to get a subset of a JS object properties=======`);
var person={
   firstName:"John",
   lastName:"Doe",
   age:30,
   city:"New York",
   country:"USA"
};
var{firstName,lastName}=person;
console.log(firstName,lastName);







 
 
 
 

 
 
 
 
 
 
 

 
 
 
 
 
 
