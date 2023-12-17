# BC_C4_JSQuiz
A quiz built using JavaScript

## Description

This project was created to get a better understanding on the inner workings of JavaScript, and to learn how it can control the different elements within a webpage.

- The project was an aid to help us understand loops, functions, storing JSON in the browswer, retrieving JSON from the browswer, and manipulating elements within the HTML
- For this particular project I created two HTML pages, and two JS documents. From here I was able to see how the corresponding script pages worked for each individual html page
- I was able to both HTML pages to work off a single CSS page by creating unique IDs and classes called on the CSS
- As this was the first project where I had multiple pages, I was able to learn how to create a file structure to upload to GITHub and how to call the different pages inside 
  the HTML when working in this structure.


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To pull the rep files:
1. Go to my git hub repo (https://github.com/dstorie80/BC_C4_JSQuiz) 
2. Click on the code button and select SSH
3. navigate git bash to a designated folder of your chosing (CD <filepath/> [if a new folder needs to be created, you can use the mkdir command in git bash])
4. Pull the latest update from git using the clone command in git bash (git clone <repo url>)
5. Once the repo has been downloaded into the folder, you can use open vs code (code . in git bash) to open the files from the repo



## Usage

To access the website you will need to follow this published link - https://dstorie80.github.io/BC_C4_JSQuiz/

To access the latest repo you will need to follow this github rep link - https://github.com/dstorie80/BC_C4_JSQuiz.git

The landing page gives you two options, you can either click the start quiz button to begin the quiz, or you can click the view high scores button to see all the stored high scores.

To begin the quiz:

1. Click on "Start Quiz"
   - a. Once the button is clicked the user will be presented with the first question
   - b. The timer will begin counting down

![image](https://github.com/dstorie80/BC_C4_JSQuiz/assets/149905416/cb094b7c-dfeb-496a-8dd6-d06940a088b0) 

2. The questions on the quiz are multiple choice (including a true / false question).  
   - a. Clicking on either a correct or incorrect response will move the user to the next question		
      - i. Clicking on an incorrect question will show the correct answer in red text at the bottom of the quizbox
        - A. Every incorrect answer selected will deduct 10 seconds off the time remaining
      - ii. Clicking on a correct response, will show the word "Correct" in green letters at the bottom of the quizbox

Incorrect
![image](https://github.com/dstorie80/BC_C4_JSQuiz/assets/149905416/6442e8fe-d4a2-4055-ab77-e7d21811e52d)

Correct
![image](https://github.com/dstorie80/BC_C4_JSQuiz/assets/149905416/7859a6bc-225b-40bd-8d73-b6f18816ae21)

3. Answering the questions correctly or incorrectly will eventually bring the user to the end of the quiz where they can enter their initials into a text box to add their initials and score to the high scores page
   - a. The score is the reminaing time left on the clock

![image](https://github.com/dstorie80/BC_C4_JSQuiz/assets/149905416/f3250d01-4db5-4221-a2e0-da0c4347e43a)


4. Once the initials are entered, the user will click on the "Submit" button and be presented with an alert stating "Your score has been submitted"

![image](https://github.com/dstorie80/BC_C4_JSQuiz/assets/149905416/27631ca4-5e5b-41fe-9051-2d62dbcb0c78)


6. Once the user has acknowleged the alert they will be taken to the high scores page
   - a. On the high scores page, the user will see a list of all the high scores that were submitted from their browser
      - i. The scores are arranged from highes to lowest
   - b. From the high scores the user will be presented with two options, "Re-Start and "Clear Highscores"
      - i. If the user clicks clear high scores
        - A. All scores in the list box will be removed 
      - ii. If the user clicks on Re-Start
        - A. The user will return to the main quiz page to re-start the quiz
           - 1a. On the main quiz page, the user can either re-start the quiz, or return to the high scores page

![image](https://github.com/dstorie80/BC_C4_JSQuiz/assets/149905416/2a409daa-31d6-41db-b17d-a20ddd286543)




## Credits

Background images:

The background image for the main site was taken from - wallpapers.com (https://wallpapers.com/background/coding-background-9izlympnd0ovmpli.html)

The background image for the highschore site was taken from - freepik.com (https://www.freepik.com/free-vector/celebration-background-with-colorful-party-flag-falling-confetti_5128060.htm#query=party%20background&position=0&from_view=keyword&track=ais&uuid=df971e32-3db8-4a43-a48c-e7a5408789c5#position=0&query=party%20background)


## License

No license used 
