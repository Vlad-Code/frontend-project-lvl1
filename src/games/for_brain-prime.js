import readlineSync from 'readline-sync';

import { toGetIsPrime, getRandomInRange } from '../module';

const brainPrime = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= 3; i += 1) {
    const givenNumber = getRandomInRange(1, 1000);
    const isPrime = toGetIsPrime(givenNumber);
    console.log(`Question: ${givenNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (isPrime === answer) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default brainPrime;
