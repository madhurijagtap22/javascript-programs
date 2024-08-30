
console.log(`=========1.check palindrom=======================`);
function isPalindeome(str){
    const reversed=str.split('').reverse().join((""));
    return str==reversed
}

const str1="madam";
var resultStr1=isPalindeome(str1);
console.log(`the given string is palindeome : ${resultStr1} `);

const str2="hello"
var resultStr2=isPalindeome(str2);
console.log(`the given string is palindeome : ${resultStr2} `);

console.log(`=================2.check Anagram======================`);
function areAnagramss(str4,str5){
  const sorteSte1=str4.split('').sort().join('')
  const sorteSte2=str5.split('').sort().join('')
  return sorteSte1===sorteSte2;
}
 var result=areAnagramss("listen","silent");
 console.log(` the given strings is Anagram : ${result}`);
 
 var result=areAnagramss("hello","world");
 console.log(` the given strings is Anagram : ${result}`);


