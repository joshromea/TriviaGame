var mainContent = $("#maincontent");
//Click Events//
$(document).on('click', '#start', function () {
    quiz.start();
});

$(document).on('click', '#finished', function () {
    quiz.finished();
});
//Question object//
var triviaQuestions = [{
    question: "Who defeated The Rock and Stone Cold Steve Austin in the same night to win the Undisputed Championship?",
    answerList: ["Kurt Angle", "John Cena", "Chris Jericho", "Mankind"],
    answer: "Chris Jericho"
},
{
    question: "How many times has The Rock won the WWE championship?",
    answerList: ["8", "4", "5", "7"],
    answer: "8"
},
{
    question: "Which Wrestlemania did Stone Cold Steve Austin defeat Shawn Michaels to win his 1st WWE Championship?",
    answerList: ["WM 17", "WM 15", "WM 14", "WM 13"],
    answer: "WM 14"
},
{
    question: "Who was the 1st person to successfully cash in Money in the Bank at Wrestlemania?",
    answerList: ["Roman Reigns", "Seth Rollins", "Dean Ambrose", "Daniel Bryan"],
    answer: "Seth Rollins"
},
{
    question: "What number position did Rey Mysterio enter when he won the 2006 Royal Rumble?",
    answerList: ["10th", "1st", "23rd", "2nd"],
    answer: "2nd"
},
{
    question: "Kurt Angle has the distinction of being the only _______ in WWE history.",
    answerList: ["Olympic Gold Medalist", "Tour De France Winner", "Super Bowl Champion", "UFC Champion"],
    answer: "Olympic Gold Medalist"
},
{
    question: "How long was CM Punk's historic WWE title reign?",
    answerList: ["587 days", "434 days", "549 days", "487 days"],
    answer: "434 days"
}];
//Main quiz functions//
var quiz = {
    correct: 0,
    incorrect: 0,
    counter: 45,
    countdown: function () {
        quiz.counter--;
        $("#counter-number").html(quiz.counter);

        if (quiz.counter === 0) {
            console.log("No more time");
            quiz.finished();
        }
    },

    start: function () {
        timer = setInterval(quiz.countdown, 1000);

        $('#container').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
        $('#start').remove();


        for (var i = 0; i < triviaQuestions.length; i++) {
            mainContent.append('<h2>' + triviaQuestions[i].question) + '</h2>';
            for (var j = 0; j < triviaQuestions[i].answerList.length; j++) {
                mainContent.append('<input type="radio" name="question' + '-' + i + '"value="' + triviaQuestions[i].answerList[j] + '">' + triviaQuestions[i].answerList[j]);
            }
        }
        mainContent.append('<button id="finished">Finished</button>');
    },
    finished: function () {


        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == triviaQuestions[0].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == triviaQuestions[1].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == triviaQuestions[2].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == triviaQuestions[3].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == triviaQuestions[4].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == triviaQuestions[5].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == triviaQuestions[6].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });

        this.result();
    },
    //End screen//
    result: function () {
        clearInterval(timer);
        $("#container h2").remove();
        mainContent.html("<h2>You're finished!</h2>");
        mainContent.append("<p>Correct Answers: " + this.correct + "</p>");
        mainContent.append("<p>Incorrect Answers: " + this.incorrect + "</p>");
        mainContent.append("<p>Did not Answer: " + (triviaQuestions.length - (this.incorrect + this.correct)) + "</p>");
    }

};
