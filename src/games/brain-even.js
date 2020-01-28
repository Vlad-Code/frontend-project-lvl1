import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomInRange from '../utils';

const firstQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';
const numberOfRounds = 3;
const isEven = (num) => num % 2 === 0;
const getQuestionAndRightAnswer = () => {
  const number = getRandomInRange(1, 1000);
  const question = String(number);
  const rightAnswer = (isEven(number) === true) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
const brainEven = () => {
  engine(firstQuestion, getQuestionAndRightAnswer, numberOfRounds);
};

export default brainEven;
