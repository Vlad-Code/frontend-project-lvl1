import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomInRange from '../utils';

const task = 'What number is missing in the progression?';
const getQuestion = (firstNum, step, miss, length) => {
  let question = '';
  for (let n = 0; n < length; n += 1) {
    const number = firstNum + n * step;
    if (n === 0) {
      question = (n === miss) ? `${question}..` : `${question}${number}`;
    } else {
      question = (n === miss) ? `${question} ..` : `${question} ${number}`;
    }
  }
  return question;
};
const lengthOfProgression = 10;
const getQuestionAndRightAnswer = () => {
  const firstNumber = getRandomInRange(1, 100);
  const stepOfProgression = getRandomInRange(1, 10);
  const missedNumberPosition = getRandomInRange(0, lengthOfProgression - 1);
  const question = getQuestion(firstNumber, stepOfProgression,
    missedNumberPosition, lengthOfProgression);
  const rightAnswer = String(firstNumber + missedNumberPosition * stepOfProgression);
  return cons(question, rightAnswer);
};
const brainProgression = () => {
  engine(task, getQuestionAndRightAnswer);
};

export default brainProgression;
