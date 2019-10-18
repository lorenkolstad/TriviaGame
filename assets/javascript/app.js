// var questions = [""];



$("#startContainer").hide();
let correctAnswers = 0;
let wrongAnswers = 0;
let totalAnswers = 0;

$("#startGame").on("click", function (event){
    event.preventDefault();
    $("#startContainer").show();
    $("#buttonContainer").hide();

})

$("input").on("click", function (event){
    let optionValue = $(this).val();
    let correctAnswer = $(this).attr("data-answer");

    if (optionValue === correctAnswer) {
        correctAnswers++;
    }

    else {
        wrongAnswers++;
    }
})

$("#submitAnswers").on("click", function (event){
    event.preventDefault();
    $("#endResults").show();
    $("#startContainer").hide();
    $("#endResults").text("You guessed " + correctAnswers + " questions correctly!");
    console.log(event);
    console.log(correctAnswers);
    console.log(wrongAnswers);
    alert("You guessed " + correctAnswers + " questions correctly!")

})







function endGame() {
    //check the answers for each option and see if it's right or wrong. 

    
}

// $("#endGame").on("click", function (event){
//     event.preventDefault();
//     $("#startContainer").show(); // can show results
//     $("#buttonContainer").hide(); // can hide the questions and start container. Still need to change id tags.

// })