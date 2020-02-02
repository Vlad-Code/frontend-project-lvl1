import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

const numberOfRounds = 3;
const engine = (task, getQuestionAndRightAnswer) => {
  console.log('Welcome to the Brain-Games');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const questionAndRightAnswer = getQuestionAndRightAnswer();
    const rightAnswer = cdr(questionAndRightAnswer);
    console.log(`Question: ${car(questionAndRightAnswer)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;( Correct answer is '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return '';
    }
  }
  console.log('Congratulations!');
  return '';
};

export default engine;
