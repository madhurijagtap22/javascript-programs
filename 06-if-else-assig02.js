var interviewCheck=function(gradScore,hasScore,sscScore,candidareName){
    if (gradScore>=70||hasScore>=80||sscScore>90) {
        console.log(`Congrates ${candidareName} you are eligible for TCS interview`);    
    } else {
        console.log(`Congrates ${candidareName} you are not eligible for TCS interview`);    
    }
}
interviewCheck(80,86,90,"Madhuri");
interviewCheck(70,65,55,"Aarti");
interviewCheck(60,79,88,"Komal");