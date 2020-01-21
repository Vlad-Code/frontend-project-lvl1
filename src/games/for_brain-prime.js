import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomInRange from '../for_all_games';

const firstQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};
const getQuestionAndRightAnswer = () => {
  const number = getRandomInRange(1, 1000);
  const question = `${number}`;
  const rightAnswer = (isPrime(number) === true) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
const brainPrime = () => {
  engine(firstQuestion, getQuestionAndRightAnswer);
};

export default brainPrime;