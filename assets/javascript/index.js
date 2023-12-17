
// Get questions to insert into index.html

var questions = [ 
	{ 
		prompt: `The external JavaScript file must
                 contain the <script> tag.`, 
		options: [ 
			"True", 
			"False",  
		], 
		answer: "False", 
	}, 

	{ 
		prompt: `How does a FOR loop start?`, 
		options: [ 
			"for (i <=5; i++)", 
			"for (i = 0; i <=5)", 
			"for i = 1 to 5", 
			"for (i = 0; i <= 5; i++)", 
		], 
		answer: "for (i = 0; i <= 5; i++)", 
	}, 

	{ 
		prompt: `How do you find the number with the
                 highest falue of x and y?`, 
		options: [ 
			"Math.max(x,y)",
			"Math.ceil(x,y)", 
			"ceil(x,y)", 			 
			"top(x,y)", 
		], 
		answer: "Math.max(x,y)", 
	}, 

	{ 
		prompt: `How can you detect the client's browser
                 name?`, 
		options: [
            "browser.name", 
            "navigator.appName", 
            "client.navName",
            "client.Browser.appName",        
        ],  
		answer: "navigator.appName", 
	}, 

	{ 
		prompt: `Which event occurs when the user
                 clicks on an HTML element?`, 
		options: [ 
			"onmouseclick", 
			"onmouseover", 
			"on", 
			"onclick", 
		], 
		answer: "onclick", 
	}, 
]; 



// Get Dom Elements 

var questionsEl = 
	document.querySelector( 
		"#questions"
	); 
var timerEl = 
	document.querySelector("#timer"); 
var choicesEl = 
	document.querySelector("#options"); 
var submitBtn = document.querySelector( 
	"#submit-score"
); 
var startBtn = 
	document.querySelector("#start"); 
var nameEl = 
	document.querySelector("#name"); 
var feedbackEl = document.querySelector( 
	"#feedback"
); 
var reStartBtn = 
	document.querySelector("#restart"); 



// Quiz's initial state 
var currentQuestionIndex = 0; 
var time = questions.length * 15; 
var timerId; 

// Start quiz and hide frontpage 

function quizStart() { 
	timerId = setInterval( 
		clockTick, 
		1000 
	); 
	timerEl.textContent = time; 
	var landingScreenEl = 
		document.getElementById( 
			"start-screen"
		); 
	landingScreenEl.setAttribute( 
		"class", 
		"hide"
	); 
	questionsEl.removeAttribute( 
		"class"
	); 
	getQuestion(); 
} 

// Loop through array of questions and 
// Answers and create list with buttons 
function getQuestion() { 
	var currentQuestion = 
		questions[currentQuestionIndex]; 
	var promptEl = 
		document.getElementById( 
			"question-words"
		); 
	promptEl.textContent = 
		currentQuestion.prompt; 
	choicesEl.innerHTML = ""; 
	currentQuestion.options.forEach( 
		function (choice, i) { 
			var choiceBtn = 
				document.createElement( 
					"button"
				); 
			choiceBtn.setAttribute( 
				"value", 
				choice 
			); 
			choiceBtn.textContent = 
				i + 1 + ". " + choice; 
			choiceBtn.onclick = 
				questionClick; 
			choicesEl.appendChild( 
				choiceBtn 
			); 
		} 
	); 
} 

// Check for right answers and deduct 
// Time for wrong answer, go to next question 

function questionClick() { 
	if ( 
		this.value !== 
		questions[currentQuestionIndex] 
			.answer 
	) { 
		time -= 10; 
		if (time < 0) { 
			time = 0; 
		} 
		timerEl.textContent = time; 
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`; 
		feedbackEl.style.color = "red"; 
	} else { 
		feedbackEl.textContent = 
			"Correct!"; 
		feedbackEl.style.color = 
			"green"; 
	} 
	feedbackEl.setAttribute( 
		"class", 
		"feedback"
	); 
	setTimeout(function () { 
		feedbackEl.setAttribute( 
			"class", 
			"feedback hide"
		); 
	}, 2000); 
	currentQuestionIndex++; 
	if ( 
		currentQuestionIndex === 
		questions.length 
	) { 
		quizEnd(); 
	} else { 
		getQuestion(); 
	} 
} 

// End quiz by hiding questions, 
// Stop timer and show final score 

function quizEnd() { 
	clearInterval(timerId); 
	var endScreenEl = 
		document.getElementById( 
			"quiz-end"
		); 
	endScreenEl.removeAttribute( 
		"class"
	); 
	var finalScoreEl = 
		document.getElementById( 
			"final-score"
		); 
	finalScoreEl.textContent = time; 
	questionsEl.setAttribute( 
		"class", 
		"hide"
	); 
} 

// End quiz if timer reaches 0 

function clockTick() { 
	time--; 
	timerEl.textContent = time; 
	if (time <= 0) { 
		quizEnd(); 
	} 
} 

// Save score in local storage 
// Along with users' name 

function saveHighscore() { 
	var name = nameEl.value.trim(); 
	if (name !== "") { 
		var highscores = 
			JSON.parse( 
				window.localStorage.getItem( 
					"highscores"
				) 
			) || []; 
		var newScore = { 
			score: time, 
			name: name, 
		}; 
		highscores.push(newScore); 
		window.localStorage.setItem( 
			"highscores", 
			JSON.stringify(highscores) 
		); 
		alert( 
			"Your Score has been Submitted"
		); 
	} 
} 

// Save users' score after pressing enter 

function checkForEnter(event) { 
	if (event.key === "Enter") { 
		saveHighscore(); 
		alert( 
			"Your Score has been Submitted"
		); 
	} 
} 

// Saves users' score after hitting the enter key
nameEl.onkeyup = checkForEnter; 

// Save users' score after clicking submit 

submitBtn.onclick = saveHighscore; 

// Start quiz after clicking start quiz 

startBtn.onclick = quizStart;
