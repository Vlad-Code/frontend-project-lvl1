import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomInRange from '../utils';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (num) => num % 2 === 0;
const getQuestionAndRightAnswer = () => {
  const number = getRandomInRange(1, 1000);
  const question = ` ${number}`;
  const rightAnswer = (isEven(number) === true) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
const brainEven = () => {
  engine(task, getQuestionAndRightAnswer);
};

export default brainEven;
