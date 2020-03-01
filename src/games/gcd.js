import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomFromRange from '../utils';

const task = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => {
  if (num1 > num2) {
    const remainder = num1 % num2;
    if (num2 === 0) {
      return num1;
    }
    return getGcd(num2, remainder);
  }
  if (num1 < num2) {
    const remainder = num2 % num1;
    if (num2 === 0) {
      return num1;
    }
    return getGcd(num1, remainder);
  }
  return num1;
};
const getQuestionAndRightAnswer = () => {
  const number1 = getRandomFromRange(1, 100);
  const number2 = getRandomFromRange(1, 100);
  const question = `${number1} ${number2}`;
  const rightAnswer = String(getGcd(number1, number2));
  return cons(question, rightAnswer);
};
const brainGcd = () => {
  engine(task, getQuestionAndRightAnswer);
};

export default brainGcd;
