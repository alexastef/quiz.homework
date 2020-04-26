// this is my javascript

//Create on click event for Start button
    //When start button is clicked, timer starts at 100 seconds
        //Must create timer first
    //When start button is clicked, first question card pops up

$(document).ready(function(){

var quiz = $(".quizDiv");
var startBtn = $("#start-btn");
var currentQuestion = 0;
var selectedAnswer = [];
var time = 100;
var score = 0;
// need to capture user choice at some point
var questions = [
    {// Do this ten times
        title: "Which artist painted 'The Acrobat'?",
        choices: ["Picasso", "Monet", "Frida", "VanGogh"],
        answer: "Picasso"
    },
    {
        title: "At what age did Vincent van Gogh start painting?",
        choices: ["40", "6", "27","13"],
        answer: "27"
    },
    {
        title: "What is the #1 rated museum in the world?",
        choices: ["The Louvre (Paris)", "The Metropolitan Museum of Art (NYC)", "Musee D'Orsay (Paris)", "Acropolis Museum (Athens)"],
        answer: "The Metropolitan Museum of Art (NYC)"
    }


];

    startBtn.on("click", function() {        
        $("#start-card").hide();
        displayQuestion();

        // quiz.append("<h5>"+questions[currentQuestion].title.value+"</h5>");
        // for (var i=0; i<questions[currentQuestion].choices.length;i++){
        //     quiz.append('<button class="answer-button id="button- '+i+'" data-name="'+questions[currentQuestion].choices[i]+'">'+questions[currentQuestion].choices[i]+'</button>');
    });

    function displayQuestion() {
        var question = questions[currentQuestion].title;
        console.log(currentQuestion);
        var questionClass = $("#question");
        var choiceList = $("#answers");
        var numChoices = questions[currentQuestion].choices.length;
        $(questionClass).text(question);
        $(choiceList).find("li").remove();
        var choice;

        for (var i=0; i < numChoices; i++) {
            choice = questions[currentQuestion].choices[i];

            if(selectedAnswer[currentQuestion] == i) {
                $('<li><input type="radio" class="radio-inline" checked="checked" value=' +i+ ' name="answerOpt" />' + '' + choice + '</li>').appendTo(choiceList);
            } else {
                $('<li><input type="radio" class="radio-inline" value=' +i+ ' name="answerOpt" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
            }

            chooseOption();
        }

    function chooseOption(){
            selectedAnswer[currentQuestion] = +$('input[name="answerOpt"]:checked').val();
        // var val = $("input[type='radio']:checked").val();
        // if (val == questions[currentQuestion].answer) {
        //     currentQuestion++
        //     displayQuestion()
       //else {
            //time--;
        // }
    }

    // function radioValue(){
    //     var 
    //     // $("#answers input").on("change", function() {
    //     // console.log($('input[name=dynradio]:checked', "#answers").val());
    //     })


    }

});
