import readlineSync from 'readline-sync';

import { getRandomInRange, getOperator, getResult } from '../module';

const task = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= 3; i += 1) {
    const number1 = getRandomInRange(1, 100);
    const number2 = getRandomInRange(1, 100);
    const operator = getOperator();
    const result = getResult(number1, number2, operator);
    console.log(`Question: ${number1} ${operator} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (result === Number(answer)) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default task;
