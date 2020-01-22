import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomInRange from '../for_all_games';

const firstQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';
const numberOfRounds = 3;
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getQuestionAndRightAnswer = () => {
  const number = getRandomInRange(1, 1000);
  const question = `${number}`;
  const rightAnswer = (isEven(number) === true) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
const brainEven = () => {
  engine(firstQuestion, getQuestionAndRightAnswer, numberOfRounds);
};

export default brainEven;
