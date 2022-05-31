import engine from '../index.js';
import getRandomNumber from './helpers.js';

const getMainQuestion = () => 'What number is missing in the progression?';
const getProgression = () => {
  const firstNumber = getRandomNumber(1, 99);
  const difference = getRandomNumber(1, 10);
  const progression = [];
  let number = firstNumber;
  for (let i = 0; i < 10; i += 1) {
    progression.push(number);
    number += difference;
  }
  return progression;
};
const getQuestionAndRightAnswer = () => {
  const progression = getProgression();
  const unknownNumberIndex = getRandomNumber(0, 9);
  const rightAnswer = progression[unknownNumberIndex];
  progression[unknownNumberIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, rightAnswer];
};

export default () => engine(getMainQuestion, getQuestionAndRightAnswer);
