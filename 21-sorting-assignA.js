const arrayRollNubers=[113,45,56,11,32,45,109.799,56,45]


console.log(`================1.Reverse the array is=======================`);
arrayOne=arrayRollNubers.reverse();
console.log(arrayOne);

console.log(`===================2.Uae sort()method========================`);
arrayTwo=arrayRollNubers.sort();
console.log(arrayTwo);

console.log(`==============3.Sort the array in ascending order==================`);
const arrayThree=arrayRollNubers.sort((a,b)=>{
     return a>b ? 1:-1
   })
   console.log(arrayThree);
   
   
console.log(`==============4.the Greatest number from the array==================`);
const arrayFour=arrayThree[arrayThree.length-1];
console.log(arrayFour);

console.log(`==============5.the Smallest  number from the array==================`);
const arrayFive=arrayThree[0];
console.log(arrayFive);

console.log(`=============6. Remove duplicates from array==============`);
const uniqueArray=[];

for (let index = 0; index < arrayRollNubers.length; index++) {
    let element=arrayRollNubers[index]
    if (uniqueArray.indexOf(element)==-1) {
        uniqueArray.push(element)    
    }  
}
console.log(uniqueArray);





 






