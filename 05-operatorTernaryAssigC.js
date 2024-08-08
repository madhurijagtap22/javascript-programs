
console.log(`=======================================1==================================`);
function maleMarriageEligibility(gender,age,boyName){
    var result= gender == `Male` && age>=21
                ? `Hey ${boyName}, you are eligible for Marriage`
                 :`Hey ${boyName}, you are not eligible for Marriage`;
    console.log(result);
}
maleMarriageEligibility("Male",25,"Sagar");
maleMarriageEligibility("Male",17,"Tushar");

console.log(`========================2=====================================`);
function femaleMarriageEligibility(gender,age,girlName){
    var result=gender="Female"&& age>=18
               ? `Hey ${girlName}, you are eligible for Marriage`
               :`Hey ${girlName} , you are not eligible for Marriage`;
    console.log(result);   
}
femaleMarriageEligibility("Female",16,"Sonali")
femaleMarriageEligibility("Female",27,"Monali")

