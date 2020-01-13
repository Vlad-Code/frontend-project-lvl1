/* eslint-disable consistent-return */
import engine from '../game-engine';

import getRandomInRange from '../for_all_games';

const brainGcd = () => {
  const firstQuestion = 'Find the greatest common divisor of given numbers.';
  const toGetGcd = (num1, num2) => {
    if (num1 > num2) {
      const remainder = num1 % num2;
      if (num2 === 0) {
        return num1;
      }
      return toGetGcd(num2, remainder);
    }
    if (num1 < num2) {
      const remainder = num2 % num1;
      if (num2 === 0) {
        return num1;
      }
      return toGetGcd(num1, remainder);
    }
  };
  const getQuestionAndRightAnswer = () => {
    const number1 = getRandomInRange(1, 100);
    const number2 = getRandomInRange(1, 100);
    console.log(`Question: ${number1} ${number2}`);
    return toGetGcd(number1, number2);
  };
  engine(firstQuestion, getQuestionAndRightAnswer);
};

export default brainGcd;
