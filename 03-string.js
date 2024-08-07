
var greet="Good Morning"
console.log("Given String is:",greet);

var greetLength=greet.length;
console.log("Total number of characters is:",greetLength);

var charAt0=greet.charAt(0);
console.log("character at index 0is:",charAt0);

var charAt6=greet.charAt(6);
console.log("character at index 6 is:",charAt6);

console.log("==============Last index character===========");

var charlast= greet.charAt (greet.Length-1);
console.log(" character at last index is:",charlast);

console.log("===========toUpperCase==================");
var upperCaseString=greet.toUpperCase();
console.log("Result is:",upperCaseString);

console.log("===============toLowerCase================");
var tolowerString=greet.toLowerCase();
console.log("Result is:",tolowerString);

console.log("=============concat()=========");
var firstName="Jenny";
var lastName="  Gates";
var concatString=firstName+lastName;
console.log("concat string using + operator : ",concatString);
var result=firstName.concat(lastName);
console.log("concat string using concat() :",result);

console.log("============indexOf()==============");
var result=greet.indexOf("M");
console.log("Index of character M is :",result);

var result=greet.indexOf("z");
console.log("Index of character z is:",result);

console.log("===========replace()===============");
var result=greet.replace("Morning","Afternoon");
console.log("After replace :",result);

console.log("===trim()=============");
var day ="   Saturday    ";
var dayLength=day.length;
console.log("Before string trim length is : ",dayLength);

var dayAfterTrim=day.trim();
var dayAfterTrimLength=dayAfterTrim.length;
console.log("After string trim length is :",dayAfterTrimLength);


console.log("Total removed char: leading and trailing-",dayLength-dayAfterTrimLength);

console.log("==================includes===========");
var result=greet.includes("Mor")
console.log(result);

console.log("=====================slice()==========");
var result=greet.slice(3,11)
console.log(result);

var result=greet.slice(5);
console.log(result);












































