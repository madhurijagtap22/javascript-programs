const array=[20,31,40,25,23,11,29,9,60,2,11];

console.log(`=========================1================== ===================`);
console.log(`Total elements is : ${array.length}`);

console.log(`===========================2=========================================`);
console.log(`First element : ${array[0]}`);
console.log(`Lasr element : ${array[array.length-1]}`);

console.log(`==============================3==================== =============`);
console.log(`the third last element : ${array[array.length-3]}`);

console.log(`=========================4===============================`)
for (const element of array) {
    if (element%2==0) {
        console.log(`Even number is given array : ${element}`);     
    }   
}

console.log(`===========================5=========================`);
for (const element of array) {
    if (element%2==1) {
        console.log(`Odd number is given array : ${element}`);    
    }    
}

console.log(`===========================6==========================`);
let additionOne=0;
for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        const element=array[index]
        additionOne=additionOne+element;   
    }  
}
console.log("Even postioned elements addition is :",additionOne);

console.log(`======================7=================================`);
let additionTwo=0;
for (let index = 0; index < array.length; index++) {
    if (index%2==1) {
        const element=array[index];
        additionTwo=additionTwo+element    
    } 
}
console.log("Odd postioned elements addition is : ",additionTwo);
  
console.log(`=====================8=========================`);
let arrayThree=array;
let sumThree=0;
for (const element of array) {
    sumThree=sumThree+element;
}
console.log("Sum of all elements from array :",sumThree);

console.log(`=====================9========================`);
for (const element of array) {
    if (element%5==0) {
        console.log(`Multiple of 5 in given array :${element}`);   
    }   
}

console.log(`========================10=====================`);
console.log(`the number 115 is availble in given array : ${array.includes(115)}`);

console.log(`========================11=====================`);
console.log(`the number 23 is availble in given array : ${array.includes(23)}`);

console.log(`=============================12=====================`);
let arrayOne=[20,31,40,25,23,11,29,9,60,2,11];;
console.log(arrayOne);
const arrayNew=arrayOne.splice(3,0,55,66)
console.log("after insert number :", arrayOne);

console.log(`===============================13==============`);
let arrayTwo=[20,31,40,25,23,11,29,9,60,2,11];;
console.log(arrayTwo);
arrayTwo.splice(4,3);
console.log("Deleting 3 element starting from index 4 :",arrayTwo);














