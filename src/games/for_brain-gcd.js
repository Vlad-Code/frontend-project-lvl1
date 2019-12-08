import readlineSync from 'readline-sync';

import { toGetGcd, getRandomInRange } from '../module';

const brainGcd = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= 3; i += 1) {
    const number1 = getRandomInRange(1, 100);
    const number2 = getRandomInRange(1, 100);
    const gcd = toGetGcd(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (gcd === Number(answer)) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default brainGcd;
