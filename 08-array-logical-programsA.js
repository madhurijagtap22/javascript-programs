console.log(`==========1.print the number of an element present in array======`);
let array=[1,2,3,4,5,6];
array.length;
console.log(array);

console.log(`========2.print the sum of an element present in array`);
let arrayOne=[1,2,3,4,5,6];
let sum=0;
for (const element of arrayOne) {
    sum=sum+element;  
}
console.log(`The sum is : ${sum}`)

console.log(`========4.the sort the elements of an array in ascending order`);
let arrayThree=[4,8,5,3,2,7,1,9,3];
 let arrayAscendingOrder=arrayThree.sort((a,b)=>{
    return a>b ? 1: -1;
 })
console.log(` Array after sorting in ascending order : [${arrayAscendingOrder}]`)

console.log(`========5.the sort the elements of an array in deascending order`);
let arrayFour=[4,8,5,3,2,7,1,9,3];
 let arrayDescendingOrder=arrayThree.sort((a,b)=>{
    return a<b ? 1: -1;
 })
console.log(` Array after sorting in descending order : [${arrayDescendingOrder}]`);

console.log(`6.find the 3rd largest number in array=======================`);
let arrayFive=[5,4,6,8,3,9,1];
let arrayAscendingOne=arrayFive.sort((a,b)=>{
    return a>b ? 1: -1;
})
console.log(arrayAscendingOne);
console.log(`the 3rd largest number of given array is : ${arrayAscendingOne[arrayAscendingOne.length-3]}`);


console.log(`6.find the 2nd largest number in array=======================`);
let arraySix=[5,7,1,8,4,9,3,2];
let arrayAscendingTwo=arraySix.sort((a,b)=>{
    return a>b ? 1: -1;
})
console.log(arrayAscendingTwo);
console.log(`the 2nd largest number of given array is : ${arrayAscendingTwo[arrayAscendingTwo.length-2]}`);


console.log(`9.find the  largest number in array=======================`);
let arraySeven=[5,8,3,6,9,2,7,4];
let arrayAscendingThree=arraySeven.sort((a,b)=>{
    return a>b ? 1: -1;
})
console.log(arrayAscendingThree);
console.log(`the largest number of given array is : ${arrayAscendingThree[arrayAscendingThree.length-1]}`);


console.log(`9.find the  largest number in array=======================`);
let arrayEight=[4,7,3,6,9,2,8,5,1];
let arrayAscendingFour=arrayEight.sort((a,b)=>{
    return a>b ? 1: -1;
})
console.log(arrayAscendingFour);
console.log(`the largest number of given array is : ${arrayAscendingFour[0]}`);



