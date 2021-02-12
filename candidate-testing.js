const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = '';
let correctAnswer = '';
let candidateAnswer = '';
let questions = ["True or false: 5000 meters = 5 kilometers ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","Who was the first American woman in space?  ","What is the minimum crew size for the International Space Station (ISS)? "];
let correctAnswers = ["True","40","Trajectory","Sally Ride","3"];
let candidateAnswers = [];
let counter = 0;
let status = '';

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Candidate name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++){
    candidateAnswer =(input.question(`${i+1}) ${questions[i]}`));
    candidateAnswers.push(candidateAnswer);
    console.log(`Your Answer: ${candidateAnswers[i]}  \nCorrect Answer: ${correctAnswers[i]}\n`);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let grade = 0;
  candidateAnswers = candidateAnswers.join(',').toLowerCase().split(',');
  correctAnswers = correctAnswers.join(',').toLowerCase().split(',');
  for (let j=0; j<candidateAnswers.length; j++){
    if (candidateAnswers[j] === correctAnswers[j]){
      counter+=1;
    } else {
      counter +=0;
    }
  } 
  grade = counter / (questions.length) *100;
  if (grade >= 80) {
    status = 'PASSED';
  } else {
    status = 'FAILED';
  }
console.log(`>>> Overall Grade: ${grade}% (${counter} of ${correctAnswers.length} responses correct)\n>>> Status: ${status} >>>`)

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