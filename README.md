# Sporting Portugal Quiz

Welcome to the Sporting Clube de Portugal Quiz! This quiz will test your knowledge about one of the most beloved sports clubs in Portugal. Get ready to dive into the rich history, achievements, and iconic moments of Sporting Clube de Portugal.
Are you a die-hard fan who knows everything about the club, or are you just starting to explore the world of Sporting Portugal? No matter your level of expertise, this quiz is designed to challenge and entertain you.
You will be presented with a series of questions covering various aspects of Sporting Clube de Portugal, including its presidents, historic achievements, iconic players, and fierce rivalries. Each question will have multiple-choice options, and it's up to you to select the correct answer.
![responsive image](/assets/images/responsive.png)


## Demo

Welcome to [Sporting Portugal](https://cvilares.github.io/Sporting-Portugal/)

- - -

# Contents
* [User Experience](#user-experience-ux)
* [Technologies Used](#technologies-used)
* [Features](#Features)
* [Potential Implementations](#potential-implementations) 
* [Browser Compability](#Browser-Compatibility)  
* [Validator Testing](#validator-testing)
* [Solved Bugs](#solved-bugs)
* [Deployment](#deployment)  
* [Responsiveness](#responsiveness)
* [Other tests](#Other-tests)
* [Fork and Clone](#Fork-and-clone)  
* [Credits](#credits)

- - - 
### User Experience UX

- The goal for visitors is to have fun and enjoy the overall quiz experience.
- Test knowledge and learn.
- Experience feedback and results: First-time visitors want to receive immediate feedback on their answers. Whether they answer correctly or incorrectly, they expect to see feedback that informs them about their performance. They may also look forward to seeing their final score and any additional insights or comments provided at the end of the quiz.
- Understand the Quiz Concept: As a first-time visitor to the quiz, the goal is to understand the concept and purpose of the quiz. Visitors should quickly grasp that it is a trivia-style game where they will be tested on their knowledge about a specific topic or theme.
- As a fan of Sporting Portugal, I want to play the quiz to test my knowledge about the club, its players, and its history.
- As a fan of Sporting Portugal, I want to know the author or speaker of each random quote displayed in the quiz, to increase my knowledge about the club and its iconic figures.
- As a new player, I want to understand the rules of the Sporting Portugal quiz, so I can familiarize myself with how the game works and participate confidently.
- As a player, I want to receive immediate feedback on whether my answer is correct or incorrect, to validate my knowledge and learn from any mistakes.


### Interactive Quiz Experience

Navigation: The user can navigate through the quiz using the provided options and buttons. They can progress to the next question, submit their answers, and receive feedback on their performance.

Question Display: The quiz displays questions one at a time, allowing the user to focus on each question individually. This approach helps prevent overwhelming the user with too much information at once.

Answer Selection: The user can select their answer from the provided options. This allows for easy interaction and ensures that the user understands the available choices.

Immediate Feedback: After the user selects an answer, the quiz provides immediate feedback. 

Scoring and Progress Tracking: The quiz keeps track of the user's score. The user can see their current score, allowing them to track their progress throughout the quiz.

Random Quotes: The inclusion of random quotes adds an extra element of interest and variety to the quiz. It provides an opportunity to engage the user with quotes related to the quiz's theme.

Success and Failure Pages: The quiz incorporates separate pages for success (congratulations) and failure (disappointment) scenarios. If the user achieves a high score, they are redirected to the success page, acknowledging their achievement. Conversely, if the user fails to answer correctly within the given attempts, they are redirected to the failure page, providing closure to their quiz experience.

- - - 
 ##  Technologies Used


-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [Google Fonts:](https://fonts.google.com/) 
-   [Git:](https://git-scm.com/) was used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
-   [GitHub:](https://github.com/) is used as the respository for the projects code after being pushed from Git.
- [Am I Responsive:](http://ami.responsivedesign.is) Checking the responsiveness.
- [W3Schools:](https://www.w3schools.com/) To learn , test and train.
- - - 


### Features

- Displaying Questions:

The displayQuestion function retrieves the current question from the questions array and displays it on the screen.

- Handling User Answers:

The checkAnswer function is called when the user selects an answer. It compares the user's answer with the correct answer for the current question and updates the score accordingly.
If the user's answer is correct, the score is incremented, and a message is logged to the console.
If the user's answer is wrong, the wrong answer count is incremented. If the count reaches 3, the showDisappointment function is called to redirect the user to the "end.html" page.
The score display is updated using the updateScore function.

- Moving to the Next Question:

The nextQuestion function increments the currentPos variable to move to the next question. If the end of the questions array is reached, it wraps around to the first question.

- Checking Total Score:

The checkTotalScore function checks if the user's total score reaches 5. If it does, the showCongratulations function is called to redirect the user to the "congratulations.html" page.

- Updating Score Display:

The updateScore function retrieves the score element from the HTML document and updates its content with the current score.

- Displaying Random Quote:

The displayRandomQuote function selects a random quote from the quotes array and displays it on the screen. It includes a random quote and the corresponding character.

- Setting Up Answer Listeners:

The setupAnswerListeners function adds event listeners to the answer elements. When an answer is clicked, the checkAnswer function is called with the corresponding answer index.

- Starting the Quiz:

The startQuiz function is called initially to begin the quiz. It displays the first question, sets up the answer listeners, and displays a random quote.

- Showing Congratulations and Disappointment Pages:

The showCongratulations function redirects the user to the "congratulations.html" page when the total score reaches 5.
The showDisappointment function redirects the user to the "end.html" page when the wrong answer count reaches 3.

- - -

### Potential Implementations



-  Timer: Implement a timer to add a time constraint for answering each question. This adds an element of urgency and can make the quiz more challenging.


- Progress Bar: Add a visual progress bar to indicate how far the user is in the quiz. It helps provide a sense of completion and motivates users to continue.

- High Scores: Implement a high score feature where users can save their scores and compare them with other players. This can encourage competition and replayability.

-  Score Multipliers: Assign score multipliers for consecutive correct answers. For example, if the user answers two questions correctly in a row, their score for the third question could be doubled.

- Hint System: Provide users with the option to request hints for difficult questions. You can display additional information or eliminate one or more incorrect answer choices.

- Share Results: Enable users to share their quiz results on social media platforms or via email. This can encourage others to take the quiz and increase its reach.

- - -

### Browser Compatibility in progress ip

- This pages were successfully tested on Safari ,Firefox and Google Chrome browsers.

### Validator Testing ip
HTML

- All HTML tested separeted,no errors were returned when passing through the official W3C validator.

![HTML Page](/assets/images/htlmvalidation.png)
  

CSS
No errors were found when passing through the official (Jigsaw) validator

  * CSS Page
![CSS Page](/assets/images/css.png)

LIGHTHOUSE TESTING

  * Lighthouse 
![Lighthouse Page](/assets/images/lhcheck.png)

Javascript
- No errors were returned when passing through the JSHint validator.
![JavaScript Page](/assets/images/javas.png)
- - -

### Color Scheme 

- The color schemes used were mainly green and white with some yellow splash, those colors are the main color of the footbal club, the main theme of this quiz.
- - -
### Deployment ip

1. Login or Sign Up to GitHub.
2. Go to project repository.
3. Select Settings
4. Click on "Pages" in the left side of the panel.
5. Bellow Build and deployment and bellow SOURCE choose  Main .
6. Choose which folder to deploy from, usually "/root".
7. Click "Save", then WAIT for it to be deployed. 
8. Your URL will be displayed above "Source

- - -

### Responsiveness in progress

Chrome developer tool have been used to check successfully the responsivness in multiple kind of devices.

The responsiveness was also tested successfully on :

- Desktop
  1600x992px scaled down to scale(0.3181)
- Laptop
  1280x802px scaled down to scale(0.277)
- Tablet
  768x1024px scaled down to scale(0.219)
- Mobile
  320x480px scaled down to scale(0.219)

  
- - -
### Other tests ip

* Background and foreground colors have a sufficient contrast ratio.
* All pages and images are loaded without issues.
* All text is visable and appropriately positioned, text sizing and font are legible.
* All links in the webpages are working correctly and there are no broken links.
* The navbar links work correctly and the user is directed to the correct page each time.
* All the menu is underlined to make a visual effect for the visitors when they choose a page.
* The "sign me up" button is correctly linked to the join us page.
* Footer logos move up when hovering over.
* Social Media links are visible, readable and clickable.
* The external links open in a new tab and that the address is correct.
* The send button on the join us page change color when we pass the mouse over.
* The form is working as expected. If a user does not fill a mandatory field the form is not submitted.
* The email input field must contain @ symbol to submit the form in the contact section.
* The hero image have a zoom effect of 5 sec.

- - -
### Fork and Clone ip
**Fork**
1. Login or Sign Up to GitHub.
2. Open the project [repository](https://github.com/CVilares/Sporting-Portugal).
3. Click the Fork button in the top right corner.

**Clone**
1. Login or Sign Up to GitHub.
2. Open the project [repository](https://github.com/CVilares/Sporting-Portugal).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in the code editor of your choice and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

### Credits ip

A special thank you to my mentors, family,friends.
- - -