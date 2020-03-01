import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomFromRange from '../utils';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (num) => num % 2 === 0;
const getQuestionAndRightAnswer = () => {
  const question = getRandomFromRange(1, 1000);
  const rightAnswer = (isEven(question) === true) ? 'yes' : 'no';
  return cons(String(question), rightAnswer);
};
const brainEven = () => {
  engine(task, getQuestionAndRightAnswer);
};

export default brainEven;
