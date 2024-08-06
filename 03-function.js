   console.log("============function with no arguments and no return value========");
   
 function show(){
  
    console.log(" inside show function");
 }
   show();                   //    function call
 
 console.log("============function with  arguments and no return value========");
     function multiply(n1,n2){
        console.log("Given numbers:",n1,n2);
        var result=n1*n2;
        console.log("Multiplication is:",result);
        
        }
     multiply(8,9);
     multiply(200,300);
     multiply(35.55,78.99);
     multiply(81);

     console.log("========function with no arguments and return value======");
     function demo(){
        console.log("Inside demo function:");
        return"good morning";
        
     }
var result=demo();
console.log("result:",result);

function square(num){
    console.log("Given number for square is:",num);
     var result=num*num;
     return result;
}
var returnValue=square( 5);
console.log("square is:",returnValue);

var returnValue=square(15)
console.log("square is:",returnValue);



     
   



