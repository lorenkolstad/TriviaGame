

var time = 0;
var intervalId;



$("#startContainer").hide();
let correctAnswers = 0;
let wrongAnswers = 0;
let totalAnswers = 0;

$("#startGame").on("click", function (event){
    event.preventDefault();
    $("#startContainer").show();
    $("#buttonContainer").hide();
    setInterval(() => {
        time+=1;
        $("#timer").text("Time: " + time);
        console.log(time);
    }, 1000);

    // DONE: increment time by 1, remember we cant use "this" here.
    // time++;
    
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);

function timeConverter(t) {

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#timer").text(converted);
    }

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    return minutes + ":" + seconds;
});

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
    // alert("You guessed " + correctAnswers + " questions correctly!")

});







// function endGame() {
//     //check the answers for each option and see if it's right or wrong. 

    
// }

// $("#endGame").on("click", function (event){
//     event.preventDefault();
//     $("#startContainer").show(); // can show results
//     $("#buttonContainer").hide(); // can hide the questions and start container. Still need to change id tags.

// })


// function count() {

//     // DONE: increment time by 1, remember we cant use "this" here.
//     time++;
    
//     // DONE: Get the current time, pass that into the timeConverter function,
//     //       and save the result in a variable.
//     var converted = timeConverter(time);
//     console.log(converted);
    
//     // DONE: Use the variable we just created to show the converted time in the "display" div.
//     $("#timer").text(converted);
//     }

//     function timeConverter(t) {

//         var minutes = Math.floor(t / 60);
//         var seconds = t - (minutes * 60);
        
//         if (seconds < 10) {
//             seconds = "0" + seconds;
//         }
        
//         if (minutes === 0) {
//             minutes = "00";
//         }
//         else if (minutes < 10) {
//             minutes = "0" + minutes;
//         }
        
//         return minutes + ":" + seconds;
    // });