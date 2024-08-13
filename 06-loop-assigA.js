console.log(`========1.count the total number vowels including the given string===========`);
var sentence="I am very good IT Developer";
var vowels="aeiou";
vowelscount=0;
for (let i =0; i< sentence.length ;i++) {
    var char=sentence.charAt(i);
    char=char.toLowerCase();
    if (vowels.includes(char)) {
        vowelscount++;    
    }    
}
console.log(`Vowels count is : ${vowelscount}`);

console.log(`===== 2.find the sum of cube of numbers from 1 to 5  ==========`);
var sumcube=0;
for (let index = 1; index <=5; index++) {
    sumcube=sumcube+index*index*index;   
}
console.log(`sum cude is ${sumcube}`);

console.log(`======================3======================`);
function oddPositionedChars(sentence) {
    for (let index = 0; index < sentence.length; index++) {
        var char;
        if (index%2==1&& sentence.charAt(index)!=" ") {
            console.log(`characters at odd position ${index}=`,sentence.charAt(index));   
        }   
    }   
}
oddPositionedChars('Hard work always pays back')
console.log(`===================`);
oddPositionedChars("Soon i will be UI IT Champ")




    