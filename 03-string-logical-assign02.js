console.log(`============== 7. find the count character "a"&"A" ================= `);
  function countCharA(str){
    let count=0;
    str=str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i]==="a") {
            count++;    
        }   
    }
    return count;
   }
 str1="JavaScript"
 console.log(`The count of "a" & "A" on '${str1}' is : ${countCharA(str1)}`);

 str2="Do or Die"
 console.log(`The count of "a" & "A" on '${str2}' is : ${countCharA(str2)}`);

 str3="Learn with us,Job with us"
 console.log(`The count of "a" & "A" on '${str3}' is : ${countCharA(str3)}`);

 str4="Empowering Dreams,Guaranteeing Futures"
 console.log(`The count of "a" & "A" on '${str4}' is : ${countCharA(str4)}`);

 str5="Anny,My Favorite fruit is Apple"
 console.log(`The count of "a" & "A" on '${str5}' is : ${countCharA(str5)}`);

console.log(`=========8 . find to count vowels in both upper and lower case ===========`);
 function vowelsCount(str){
    let count=0;
    const vowels="aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;   
        }
     }
       return count;
    
 }
 str6="JavaScript";
 console.log(`Vowels in the string '${str6}' is : ${vowelsCount(str6)}`);

 str7="HTML and CSS";
 console.log(`Vowels in the string '${str7}' is : ${vowelsCount(str7)}`);
 
 str8="Language of Internet";
 console.log(`Vowels in the string '${str8}' is : ${vowelsCount(str8)}`);
 
 str9=" I am UI Developer";
 console.log(`Vowels in the string '${str9}' is : ${vowelsCount(str9)}`);
 
 str10="Do or Die";
 console.log(`Vowels in the string '${str10}' is : ${vowelsCount(str10)}`);

console.log(`========= 10 . find the split the string by spaces and count the words==========`);
function wordCount(str){
    const words=str.trim().split(' ');
    return words.length;
}
const str11="JavaScript the language of Internet";
console.log(` word count for '${str11}' is : ${wordCount(str11)}`);

const str12="Enhance your Learning journey with Exclusive add-ons";
console.log(` word count for '${str12}' is : ${wordCount(str12)}`);

const str13="Beyond framworks, Beyond Imagination";
console.log(` word count for '${str13}' is : ${wordCount(str13)}`);

const str14="I am passionate software developer";
console.log(` word count for '${str14}' is : ${wordCount(str14)}`);


 
 

 

   

