const input = require('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++){
    candidateAnswers[i] = input.question(questions[i]);
  }
}
function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let numCorrect = 0;
  console.log(`\nCandidate Name: ${candidateName}`);
  for (let i = 0; i < questions.length; i++){
    console.log(`Question ${questions[i]}\nCandidate answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}`+"\n");
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      numCorrect++;
    }
  }
  
  let grade = (numCorrect / questions.length) * 100;
  
  console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of 5 responses correct) <<<`);
  
  if (grade >= 80){
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<");
  }
  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  //console.log(`hello: ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};