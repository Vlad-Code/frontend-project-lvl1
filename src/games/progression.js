import launch from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (firstNumber, difference) => {
  const progression = [];
  let number = firstNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(number);
    number += difference;
  }
  return progression;
};

const getBrainProgression = () => {
  const firstNumber = getRandomNumber(1, 99);
  const difference = getRandomNumber(1, 10);
  const progression = getProgression(firstNumber, difference);
  const unknownNumberIndex = getRandomNumber(0, progression.length - 1);
  const rightAnswer = String(progression[unknownNumberIndex]);
  progression[unknownNumberIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, rightAnswer];
};

export default () => launch(description, getBrainProgression);
