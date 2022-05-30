import engine from '../index.js';
import getRandomNumber from './helpers.js';

const getMainQuestion = () => 'What number is missing in the progression?';
const getProgression = () => {
  const unknownNumberIndex = getRandomNumber(0, 9);
  const firstNumber = getRandomNumber(1, 99);
  const difference = getRandomNumber(1, 10);
  let number = firstNumber;
  let question = '';
  let rightAnswer;
  for (let i = 0; i < 10; i += 1) {
    if (i === unknownNumberIndex) {
      rightAnswer = number;
      question = `${question}.. `;
    } else {
      question = `${question}${number} `;
    }
    number += difference;
  }
  const normalisedQuestion = `Question: ${question.trim()}`;
  return [normalisedQuestion, rightAnswer];
};

export default () => engine(getMainQuestion, getProgression);
