import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomInRange from '../utils';

const firstQuestion = 'What number is missing in the progression?';
const numberOfRounds = 3;
const getProgression = (firstNum, addedNum, miss, numberOfMembers) => {
  let progression = '';
  for (let n = 0; n < numberOfMembers; n += 1) {
    let number = firstNum + n * addedNum;
    if (n === miss) {
      number = '..';
    }
    progression = `${progression} ${number}`;
  }
  return progression;
};
const getQuestionAndRightAnswer = () => {
  const firstNumber = getRandomInRange(1, 100);
  const addedNum = getRandomInRange(1, 10);
  const numberOfMembers = 10;
  const numberOfMissedNumber = getRandomInRange(1, numberOfMembers);
  const myProgression = getProgression(firstNumber, addedNum,
    numberOfMissedNumber, numberOfMembers);
  const missedNumber = firstNumber + numberOfMissedNumber * addedNum;
  const result = (numberOfMissedNumber === 0) ? firstNumber : missedNumber;
  const rightAnswer = String(result);
  const question = `${myProgression}`;
  return cons(question, rightAnswer);
};
const brainProgression = () => {
  engine(firstQuestion, getQuestionAndRightAnswer, numberOfRounds);
};

export default brainProgression;
