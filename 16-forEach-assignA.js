const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-60];

console.log(`========1====================================`);
 arrayNumbers.forEach((currentValue,index)=>{
     console.log(` the array element is : ${currentValue} & its index : ${index}`); 
 })

console.log(`================2===================================`);
arrayNumbers.forEach((currentValue)=>{
    if (currentValue>0) {
        console.log(` the positive number is : ${currentValue}}`);
    }
})

console.log(`================3===================================`);
    const newArray=[];
    arrayNumbers.forEach((currentValue)=>{
        if (currentValue<0) {
            newArray.push(currentValue,)
        }
    })
    console.log(`the Negative number and Add new array : [${newArray}]`);

console.log(`================4==================================`);
arrayNumbers.forEach((currentValue)=>{
    if (currentValue%2==0) {
        console.log(` the Even number : ${currentValue}`);  
    }
})

console.log(`================5==================================`);
let sum=0;
arrayNumbers.forEach((currentValue)=>{
    sum=sum+currentValue;
})
console.log(` the sum of elements is : ${sum}`);

console.log(`================6==================================`);
arrayNumbers.forEach((currentValue,index)=>{
    if (index%2==0) {
        console.log(` the Even index array value : ${currentValue}`);  
    }
})


    
    
    





