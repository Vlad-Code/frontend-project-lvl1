import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomInRange from '../utils';

const task = 'What number is missing in the progression?';
const getQuestion = (firstNum, step, miss, length) => {
  let question = '';
  for (let n = 0; n < length; n += 1) {
    let number = firstNum + n * step;
    if (n === miss) {
      number = '..';
    }
    question = `${question}${number} `;
  }
  return question;
};
const getQuestionAndRightAnswer = () => {
  const firstNumber = getRandomInRange(1, 100);
  const stepOfProgression = getRandomInRange(1, 10);
  const lengthOfProgression = 10;
  const numberOfMissedNumber = getRandomInRange(1, lengthOfProgression);
  const question = String(getQuestion(firstNumber, stepOfProgression,
    numberOfMissedNumber, lengthOfProgression));
  const rightAnswer = firstNumber + numberOfMissedNumber * stepOfProgression;
  const result = String((numberOfMissedNumber === 0) ? firstNumber : rightAnswer);
  return cons(question, result);
};
const brainProgression = () => {
  engine(task, getQuestionAndRightAnswer);
};

export default brainProgression;
