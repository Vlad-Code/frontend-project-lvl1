import readlineSync from 'readline-sync';

import { toGetProgression, getRandomInRange } from '../module';

const brainProgression = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = getRandomInRange(1, 100);
    const d = getRandomInRange(1, 10);
    const numberOfMissedNumber = getRandomInRange(1, 10);
    const missedNumber = (numberOfMissedNumber === 1) ? firstNumber : (2 *firstNumber + (numberOfMissedNumber -2) * d + numberOfMissedNumber * d) / 2;
    const myProgression = toGetProgression(firstNumber, d, numberOfMissedNumber);
    console.log(`Question:${myProgression}`);
    const answer = readlineSync.question('Your answer: ');
    if (missedNumber === Number(answer)) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${missedNumber}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default brainProgression;