
var votaEligible=function(age){
    if (age==0||age>130||age<0||age==null) {
        console.log(`Invalid data : ${age}`);
          
    } else {
        console.log(`valid data : ${age}`);
        if (age>=18) {
            console.log(`Eligible for voting`);   
        } else {
            console.log(`Not eligible for voting`);    
        }    
    }
}
votaEligible(45);
console.log(`----------------------------------------`);

votaEligible(17);
console.log(`------------------------------------------`);

votaEligible(8);
console.log(`---------------------------------------------`);

votaEligible(20);
console.log(`-----------------------------------------------`);

votaEligible(-10);
console.log(`--------------------------------------`);

votaEligible(200);
console.log(`----------------------------------------------`);

votaEligible(0);
console.log(`-------------------------------------------------`);

votaEligible(null)
console.log(`-----------------------------------------------`);

