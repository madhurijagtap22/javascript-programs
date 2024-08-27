
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`The given array is:  ${arrayNumbers}`);

console.log(`===============1 After add 10 in the given array ======================`);
const arrayAdd=arrayNumbers.map((element)=>{
    return element+10
})
console.log(arrayAdd);

console.log(`===================2.After Cube the each array element===============`);
const arrayCube=arrayNumbers.map((element)=>{
    return element*element*element;

})
console.log(arrayCube);

console.log(`===================3.After Cube the each array element===============`);
const arrayIndex=arrayNumbers.map((element,index)=>{
    return element+index;
})
console.log(arrayIndex);




