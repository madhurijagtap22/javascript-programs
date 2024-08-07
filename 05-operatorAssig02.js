
console.log(`================================1=================================`);
function greaterNumber(n1,n2){
    var result =  n1>=n2 ? n1: n2;
    console.log(`Given numbers are : ${n1}, ${n2} and greater number is : ${result}`);   
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`============================2==================================`);
function isEvenOrOddNum(num){
    var result= num%2==0 ? true: false;
    return result;    
}
returnValue=isEvenOrOddNum(29);
console.log(`"29" number is even : ${returnValue}`);

returnValue=isEvenOrOddNum(44);
 console.log(`"44" number is even : ${returnValue}`);

returnValue=isEvenOrOddNum(0)
console.log(`"0" number is even : ${returnValue}`);

returnValue=isEvenOrOddNum(101);
console.log(`"101" number is even : ${returnValue}`);

console.log(`==================================3============================`);
function wordLength(string){
    var resultlength=string.length;
    var result=resultlength%2==0 ?  "EVEN": "ODD";
    return result;
}
var result=wordLength("JavaScript");
console.log(`the word "javascript" length is : ${result}`);

var result=wordLength("developer");
console.log(`the word "developer" length is : ${result}`);

var result=wordLength("Google");
console.log(`the word "Google" length is : ${result}`)




