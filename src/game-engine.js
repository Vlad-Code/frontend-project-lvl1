import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

const engine = (firstQuestion, getQuestionAndRightAnswer, numberOfRounds) => {
  console.log('Welcome to the Brain-Games');
  console.log(`${firstQuestion}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const pair = getQuestionAndRightAnswer();
    const rightAnswer = cdr(pair);
    console.log(`Question: ${car(pair)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;( Correct answer is '${rightAnswer}'\nLet's try again, ${userName}!`);
    }
  }
  return console.log('Congratulations!');
};

export default engine;
