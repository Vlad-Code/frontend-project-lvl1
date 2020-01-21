import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomInRange from '../for_all_games';

const firstQuestion = 'What number is missing in the progression?';
const toGetProgression = (firstNum, addedNum, miss) => {
  let progression = '';
  for (let n = 1; n <= 10; n += 1) {
    let number = firstNum + (n - 1) * addedNum;
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
  const numberOfMissedNumber = getRandomInRange(1, 10);
  const myProgression = toGetProgression(firstNumber, addedNum, numberOfMissedNumber);
  const missedNumber = (2 * firstNumber + (numberOfMissedNumber - 2) * addedNum
   + numberOfMissedNumber * addedNum) / 2;
  const result = (numberOfMissedNumber === 1) ? firstNumber : missedNumber;
  const question = `${myProgression}`;
  return cons(question, result);
};
const brainProgression = () => {
  engine(firstQuestion, getQuestionAndRightAnswer);
};

export default brainProgression;
