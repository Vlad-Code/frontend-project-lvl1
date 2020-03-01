import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomFromRange from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};
const getQuestionAndRightAnswer = () => {
  const question = getRandomFromRange(-1000, 1000);
  const rightAnswer = (isPrime(question) === true) ? 'yes' : 'no';
  return cons(String(question), rightAnswer);
};
const brainPrime = () => {
  engine(task, getQuestionAndRightAnswer);
};

export default brainPrime;
