
console.log(`==== 1. find the length or total no of characters of the strings=======`);
   const str1="Hello , World";
   const lengthStr1=str1.length-1;
   console.log(` 1.1 the length of given string  "${str1}" is : ${lengthStr1}`);

   const str2="JavaScript is the language of Internet";
   const lengthStr2=str2.length-1;
   console.log(` 1.2 the length of given string "${str2}" : ${lengthStr2}`);

console.log(`========== 2 .Find the last character of the given strings=================`);
    function getLastCharacter(str){
     return str.charAt(str.length-1);
    }
      const str4="Hey,my friend, Programming Language";
      const str5= "I am learining logical programs";
      const str6="Angular";

console.log(` 2.1 the last character of the string "${str4} is :${getLastCharacter(str4)}`);
console.log(` 2.2 the last character of the string "${str5} is :${getLastCharacter(str5)}`);
console.log(` 2.3 the last character of the string "${str6} is :${getLastCharacter(str6)}`);




console.log(`=====3.print the first character of the given strings =====`);
function geFirstCharacter(str){
   return str.charAt(0);
}
  const str7="React";
  const str8="Elon Musk";
  const str9="Apple Founder is Stew job";

console.log(` 3.1 The first character of the string "${str7} is :${geFirstCharacter(str7)}`);
console.log(` 3.2 The first character of the string "${str8} is :${geFirstCharacter(str8)}`);
console.log(` 3.3 The first character of the string "${str9} is :${geFirstCharacter(str9)}`);

console.log(`====== 4. Check whether given strings contains word "UI" or not====`);
function containsUI(str){
   return str.includes("UI")
}

const strOne="React-UI Developer";
console.log(` 4.1 Does the string "${strOne}" contain "UI" : ${containsUI(strOne)}`);

const strTwo="UI Developer";
console.log(` 4.2 Does the string "${strTwo}" contain "UI" : ${containsUI(strTwo)}`);

const strThree="Front end and backend techologies";
console.log(` 4.3 Does the string "${strThree}" contain "UI" : ${containsUI(strThree)}`);

console.log(`================== 5. how do you split a string into an array of substrings=====================  `);
function splitString(str,delimiter){
   return str.split(delimiter);
}
 const strFour="apple,orange,banana";
 const strFive="Stew,Bill,Jenny,Elon";

 const result1=splitString(strFour,',');
 console.log(` 5.1 The array of substrings from "${strFour} is : `,result1);

 const result2=splitString(strFive,',');
 console.log( ` 5.2 The array of substrings from "${strFive} is : `,result2);

console.log(`===== 6.1. Reverse the string using any existing method that "Using predefind methods"==================`);
   function reversStringUsingMethod(str){
      return str.split('').reverse().join('');
   }
   const strSix="Software";
   console.log(` Thr reverse of the string "${strSix}" is : ${reversStringUsingMethod(strSix)}`);
   
   const strSeven="UI Developer";
   console.log(` Thr reverse of the string "${strSeven}" is : ${reversStringUsingMethod(strSeven)}`);

console.log(`====== 6.2 Reverse the string using any existing method that " Without Using predefind methods `);
 function resverStringManually(str){
   let reversedStr=',';
   for (let i = str.length-1; i >=0 ; i--) {
      reversedStr += str[i];
   
   }
   return reversedStr;
  }
  const strEight="Wed Developer";
  console.log(` Thr reverse of the string "${strEight}" is : ${resverStringManually(strEight)}`);

  const strNine="Billion Dollar";
  console.log(` Thr reverse of the string "${strNine}" is : ${resverStringManually(strNine)}`);

  const strTen="Java";
  console.log(` Thr reverse of the string "${strTen}" is : ${resverStringManually(strTen)}`);





   
   

 




  
      

  
      

   
   
   
