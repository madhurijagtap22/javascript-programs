const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];

console.log(`==========1.find the all numbers are greater than 50 ================`);
 const arrayOne=arrayNumbers.filter((element)=>{
    return  element>50;
 })
 console.log(arrayOne);

 console.log(`==========2.find the all the even numbers  ================`);
 const arrayTwo=arrayNumbers.filter((element)=>{
    if (element%2==0) {
        return element 
    }
 })
 console.log(arrayTwo);

 console.log(`==========3.find the all the odd numbers  ================`);
 const arrayThree=arrayNumbers.filter((element)=>{
    if (element%2==1) {
        return element 
    }
 })
 console.log(arrayThree);

 console.log(`========4.find the all the  numbers  which are multiple of 5 ================`);
 const arrayFour=arrayNumbers.filter((element)=>{
    if (element%5==0) {
        return element 
    }
 })
 console.log(arrayFour);

 console.log(`========4.find the all the  numbers  which are multiple of 20 and 50================`);
 const arrayFive=arrayNumbers.filter((element)=>{
    if (element%20==0 && element%50==0) {
        return element 
    }
 })
 console.log(arrayFive);
 
