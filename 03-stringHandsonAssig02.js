
console.log("====================1=====================================");
var sentence="   Hey you are doing good, keep it up    "
console.log("Given string is:",sentence);

console.log("==============2=============================");
var sentenceLength=sentence.length;
console.log("The length of string is :",sentenceLength);

console.log("===========================3=============================");
var result=sentence.trim();
console.log("The sentence after trim spaces: ",result);

var resultlength=result.length
console.log("After trim string length is :",resultlength);

console.log("=====================4=========================");
var numberSpaces=sentenceLength-resultlength;
console.log("the total no spaces are :",numberSpaces);

console.log("====================5============================");
var fistchar=result.charAt(0);
var lastchar=result.charAt(resultlength-1);
console.log(`The first and last character are : ${fistchar} ${lastchar}`);

console.log("==========================6============================");
var totalWord=sentenceLength-numberSpaces;
console.log("total words available after stpe 3: 8");

console.log("=============7==============================");
 var indexResult=sentence.indexOf('good')
 console.log("Index of charater good is :",indexResult);

 console.log("======================8=========================");

 var substring=result.substring(22);
 console.log("Substring from index 22:",substring);

 console.log("============================9=========================");
var str=result.includes("up")
console.log("The string end with up :",str);

console.log("==========================10==============================");
var strFirst=result.includes("Hey");
console.log("The string starts with Hey :",strFirst);



 
 
 
 















