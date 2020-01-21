import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomInRange from '../for_all_games';

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
  return num1;
};
const getQuestionAndRightAnswer = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);
  const question = `${number1} ${number2}`;
  const rightAnswer = toGetGcd(number1, number2);
  return cons(question, rightAnswer);
};
const brainGcd = () => {
  engine(firstQuestion, getQuestionAndRightAnswer);
};

export default brainGcd;
