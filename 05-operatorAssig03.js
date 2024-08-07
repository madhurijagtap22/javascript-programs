function interviewCheck(gradScore,hasScore,sscScore,candidareName){
    var result=gradScore>=70 || hasScore>=80 || sscScore>90
               ?`Congrats ${candidareName} you are eligible for TCS interview`
                :`Unfortunately ${candidareName} are not eligible for interview`
    console.log(result);
    

}
interviewCheck(80,86,90,"Madhuri");
interviewCheck(70,65,55,"Aarti");
interviewCheck(60,79,88,"Komal");
