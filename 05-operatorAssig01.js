
console.log("============================1======================================");


function squareOfWordLength(sentence){

    console.log(`Given sentence is: ${sentence}`);
    var result = sentence.split(" ");
    var len = result.length;
    var square = len * len;
    return square;

}
  var result = squareOfWordLength("JavaScript");
  console.log(`Square of world length is: ${result}`);

   var result = squareOfWordLength("Google Chrome");
    console.log(`Square of world length is: ${result}`);

   var result = squareOfWordLength("Web Developer Smart");
    console.log(`Square of world length is: ${result}`);

    console.log("=========================2==================================");

    console.log("========================2.1=====================");
    
    
    function givenString(){

        var greet="I am Amgular Developer";
        var greetLength=greet.length;
        console.log(`The length of given string "I am Angular Developer":  ${greetLength}`);
        var numberOfWord=greet.split(" ");
        var numberOfWordLength=numberOfWord.length;
        var result=greetLength/numberOfWordLength;
        console.log(`The result after the divide is  : ${result}`);

        console.log(`===========================2.2=============================`);

        var multipleResult=greetLength*numberOfWordLength;
        console.log(`the result after multiple is :  ${multipleResult}`);

    }
    givenString();
