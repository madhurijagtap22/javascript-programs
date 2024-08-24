function isPrime(num){
    for (let index = 2; index < num; index++) {
        if(num%index==0){
            return false;
        } 
    }
   return true; 
}
var result = isPrime(3);
console.log(`Is number 3 Prime - ${result}`);

var result = isPrime(9);
console.log(`Is number 9 Prime - ${result}`);

var result = isPrime(6);
console.log(`Is number 6 Prime - ${result}`)

var result = isPrime(7);
console.log(`Is number 7 Prime - ${result}`)

var result = isPrime(19);
console.log(`Is number 19 Prime - ${result}`)
 
var result = isPrime(29);
console.log(`Is number 29 Prime - ${result}`)
 
var result = isPrime(53);
console.log(`Is number 53 Prime - ${result}`)

console.log(`=============2 find the Count the spaces=============`);
function spaceCount(str){
    let Count=0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(" ")) {
           Count++;
        }
        
    }

    return Count;
}
const str1="Revision is mother of success";
console.log(` the tota space cout of string [${str1}] is :${spaceCount(str1)}`);

const str2="JavaScript is the language of internet world";
console.log(` the tota space cout of string [${str2}] is :${spaceCount(str2)}`);
 
   


