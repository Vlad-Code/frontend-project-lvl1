import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomInRange from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number > 1) {
    for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
      if (number % divider === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
};
const getQuestionAndRightAnswer = () => {
  const number = getRandomInRange(-1000, 1000);
  const question = String(number);
  const rightAnswer = (isPrime(number) === true) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
const brainPrime = () => {
  engine(task, getQuestionAndRightAnswer);
};

export default brainPrime;
