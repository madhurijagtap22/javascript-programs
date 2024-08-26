
console.log(`==========1.Function with no arguments and no return value ============`);
let show = ()=>{
      console.log(`Good Morning,Today is Monday`);   
}
show()

console.log(`======2.Function with arguments and no return value======`);
let Multiplication=(n1,n2,n3=1)=>{
     let result=n1*n2*n3;
     console.log(` multiplication of given no.${n1},${n2},${n3} is : ${result}`);  
}
Multiplication(5,5,2);
Multiplication(10,4);


console.log(`======3.Function with arguments and return value======`);
let add=(n1,n2,n3,n4,n5)=>{
 let result=n1+n2+n3+n4+n5;
 return result
}
let addition=add(100,100,200,349,756);
console.log(` 3.1 Addition of given number is =  ${addition}`);
let addition2=add("I am"," learning"," ES6"," features"," in depth");
console.log(` 3.2  Addition of given number is =  ${addition2}`);
