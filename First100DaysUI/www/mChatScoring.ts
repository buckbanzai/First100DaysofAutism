function mChatScoreUp(question) {
    score++;
    window.location.assign("mchat.html#mchat".concat((question + 1).toString()));
    if (question == 23) {
        if (score < 3) {

}
if(score<7&&score>2){

}
if (score>6){

}
document.getElementById("score").innerHTML=score.toString();

            }
        
}
function mChatNext(question) {
    //future stuff here
    if (question == 23) {
        if (score < 3) {
document.getElementById("blurb").innerHTML="Your responses suggest that your child&#39;s behaviors are within the expected range of development. However, if you or your healthcare provider has persistent concerns about autism or other developmental delays, you should pursue evaluation by a specialist. This questionnaire is designed to screen for autism, not other developmental issues.<br/>If you have concerns about any area of your child&#39;s development or behavior, please discuss these concerns with your child&#39;s doctor.";
}
if(score<7&&score>2){
document.getElementById("blurb").innerHTML="This score suggests that your child may be at elevated risk for a developmental disorder such as autism. Importantly, most children identified as at risk by this survey do not go on to develop autism. This score simply indicates higher than average risk. It warrants a survey Follow-up Interview&rdquo; conducted by your child&#39;s pediatrician or other specialist.<br/>This questionnaire is designed to screen for autism, not other developmental issues. If you have concerns about any area of your child&#39;s development or behavior, please discuss these concerns with your child&#39;s doctor.";
}
if (score>6){
document.getElementById("blurb").innerHTML="This score suggests that your toddler is at elevated risk for autism or another developmental disorder and should be evaluated by a specialist for early intervention services.<br/>This questionnaire is designed to screen for autism, not other developmental issues. If you have concerns about any area of your child&#39;s development or behavior, please discuss these concerns with your child&#39;s doctor.";
}
document.getElementById("score").innerHTML="<strong>Your Child's score was ".concat(score.toString()).concat(".</strong>");
            }
}

// Local variables
var score = 0;

    scoreRanges: [
        { minScore: 0, maxScore: 2, message: "Low" },
        { minScore: 3, maxScore: 6, message: "Elevated" },
        { minScore: 7, maxScore: 50000, message: "High" }
    ]