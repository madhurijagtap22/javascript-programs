let professor={
    firstName:"Madhuri",
    lastName:"Jagtap",
    age:24,
    city:"Pune",
    gender:"Female",
    degrees: {
        engineering:"CSC",
        PHD:"Adv Computing"
    },
    certificates:["Hacker Rank Participation","Certificate in IFE course","Certificate in adv Programming"]
}

console.log(`==========================1======================================`);
console.log(`First name :${professor.firstName}  `,`Last name : ${professor.lastName}  `,`Age : ${professor.age}  `,
    `City : ${professor.city}  `,`Gender : ${professor.gender}`);

console.log(`===========================2================================`);
console.log(`Degrees : ${professor.degrees}`);

console.log(`=================================3=====================`);
console.log(professor.certificates);

console.log(`===================4===========================`);
console.log(professor);

console.log(`================5==============================`);
professor.totalExperience ="14 years";
console.log("Total Experience :",professor.totalExperience);

console.log(`=======================6=======================`);
 console.log("Age is :", professor.age=28);
 console.log(professor);

 console.log(`================7======================`);
 professor.certificates.splice(1,0,"Oracle Certificates")
 console.log("Add one new certificate:",professor.certificates);

 console.log(`====================8==================`);

 

 console.log(`======================9========================`);
 console.log(professor.certificates);
 for (let index = 0; index < professor.certificates.length; index++) {
    const element = professor.certificates[index];
    console.log(element);   
 }

 console.log(`========================10====================`);
 for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key}: ${element}`);
        
        
    }
 }
 
 
 
 
 
 
 
 
 
 
 








    


