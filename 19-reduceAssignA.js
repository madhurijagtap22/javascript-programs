const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];

console.log(`==========1.find the sum of all numbers =============`);
const sum=array_numbers.reduce((runningtotal,value)=>{
       return runningtotal+value;
})
console.log(sum);

console.log(`==========1.find the numbers multiple of 5 and than sum it =============`);
const multipleArray=array_numbers.filter((element)=>{
    if (element%5==0) {
        return element
    }
})
console.log(multipleArray);

const sumArray=multipleArray.reduce((runningtotal,value)=>{
      return runningtotal+value;
})

console.log(`The sum of number which multiple of 5 is : ${sumArray}`);



