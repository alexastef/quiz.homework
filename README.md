# quiz.homework
JavaScript Quiz Homework

In this assignment, we were to create a timed quiz using JavaScript and save the scores to local storage. 

I'm a bit stuck with javascript but what I had aimed to do is outlined below and my code thus far is in this repo:

First, create HTML skeleton with main page card, high scores in left corner, and time in right corner. 
HTML main page card has some info about the quiz as well as a start button. 

The JavaScript document starts with defined global variables and a function that is called when the start button is clicked, in this case displayQuestion. 

When the start button is clicked, the main card is hidden and the displayQuestion function is called to start the quiz. With currentQuestion set to 0, the displayQuestion function get the first question by pulling questions[currentQuestion].title. The choices are displayed using a for loop through numChoices which is defined as questions[currentQuestion]choices.length. Li elements are created for each one with names and values. 

Next, the value of the selected radio needs to be stored as a new variable. If the selected radio matches questions[currentQuestion].answer, then the next question populates and the score goes up by 1. Otherwise, the user will be alerted that the answer is incorrect and the time decrements.

Once the user answers all questions or the timer runs out, the high scores page will populate. The user can type in their initials, press enter, and save their score and input to the local storage. By clicking Play again in corner where High Scores was, user restarts game at question 1. 

My plan is to continue working on this assignment with a tutor so that I can figure out the solution and have a complete quiz to add to my portfolio. 



