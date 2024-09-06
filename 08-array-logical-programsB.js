console.log(`============11.program to remove the the duplicate element in an array=====`);
function removeDuplicate(arr){
    let uniqueArray=[];
    for (let index = 0; index < array.length; index++) {
        if (uniqueArray.indexOf(arr[index])==-1) {
            uniqueArray.push(arr[index])   
        }  
    }
    return uniqueArray
}
let array=[4,6,7,3,4,9,5,3,8,2,6]
let uniqueArray=removeDuplicate(array);
console.log(uniqueArray);

console.log(`====12.print odd and even number from an array========`);
let arrayOne=[4,6,2,5,8,1,9,3,7]
for (const element of arrayOne) {
    if (element%2==0) {
        console.log(`the even number of given array is : ${element}`);
    }
}
for (const element of arrayOne) {
    if (element%2==1) {
        console.log(`the odd number of given array is ${element}`);
    } 
}

console.log(`========13.program to copy all elements from one array to another array====`);
  console.log(`======1.Method : using forLoop=====================`);
  let arrayTwo=[1,2,3,4,5];
  let newArray=[];
  for (let index = 0; index < arrayTwo.length; index++) {
    newArray.push(arrayTwo[index])   
  }
  console.log(newArray);

  console.log(`2. Method : using slice method`);
  let newArrayOne=arrayTwo.splice();
  console.log(newArray);

  console.log(`3.Method: using the spread operator`);
  let newArrayTwo=[...arrayTwo]
  console.log(newArrayTwo);

console.log(`=== 16. program to print the duplicate element of an array=======`);
function findDuplicatees(array){
    const duplicate=[];
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
           if (array[i]==array[j] && !duplicate.includes(array[i])) {
              duplicate.push(array[i])
           } 
        }
    }
    return duplicate;
}
let numbers=[2,4,8,5,6,3,2,4,6,6];
const duplicateNumber=findDuplicatees(numbers);
console.log(`Duplicate numbers : ${duplicateNumber}`);

console.log(`===17. program to print the elements of an array==========`);
console.log(`=====17.1 using the forLoop=========`);
let arrayThree=[1,2,3,4,5];
for (let index = 0; index < arrayThree.length; index++) {
    console.log(arrayThree[index]);  
}
console.log(`===17.2 using forEach loop===`)
const element=arrayThree.forEach((element)=>{
     console.log(element); 
})

console.log(`==== 18 .print the elements of an array in revrerse order====`);
console.log(`  ===18.1. using the for loop=====`);
let arrayFour=[1,2,3,4,5];
for (let i =arrayFour.length-1; i >=0; i--) {
      console.log(arrayFour[i]);
    
}
console.log(`====18.2 using forEach loop==========`);
 const revrerseElements=arrayFour.slice().reverse().forEach((element)=>{
     console.log(element);
     
 })

console.log(`===19. print the element of an array present on even postion========`);
let arrayFive=[1,6,3,9,4,2,6,3,9]
for (let index = 0; index < arrayFive.length; index++) {
    if (index%2==0) {
        console.log(` the even postion elements : ${arrayFive[index]}`);  
    }
}

console.log(`===20. print the element of an array present on odd postion========`);
for (let index = 0; index < arrayFive.length; index++) {
    if (index%2==1) {
        console.log(` the odd postion elements : ${arrayFive[index]}`); 
    }
}













  









