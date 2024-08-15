const fruits =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits);

console.log(`======================1===============================`);
console.log(` first element of given array  :  ${fruits [0]}`);
console.log(`  last element of given array : ${fruits[fruits.length-1]}`);

console.log(`=====================2=============================================`);
let fruitsOne=fruits;
fruits.unshift("Papaya")
console.log("Result after papaya added :", (fruitsOne));

console.log(`===================3=================================`);
let removed=fruits.splice(4,1);
console.log(removed);
console.log(" After removing Mango from array : ",fruits);

console.log(`=====================4=====================`);
let add=fruits.splice(6,0,"Pineapple")
console.log("Adding pineaapple at end : ",fruits);

console.log(`===================5==============================`);
let addOne=fruits.splice(fruits.length-2,0,"Dragon Fruit");
console.log("Adding element 'Dragon Fruit': ",fruits);

console.log(`====================6===================`);
let removedOne=fruits.splice(2,1,"Kiwi");
console.log("Replace an element 'Orange' with 'Kiwi' : ",fruits);

console.log(`===================7====================`);
let fruitsTwo=fruits.slice(1,5);
console.log("Log the elements starting from index 1 to 4 :",fruitsTwo);

console.log(`=======================8=====================`);
let fruitsThree=fruits.slice(fruits.length-3);
console.log("Log the last 3 elements : ",fruitsThree);
























