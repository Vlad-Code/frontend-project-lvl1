import engine from '../index.js';
import getRandomNumber from './helpers.js';

const getMainQuestion = () => 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const getBrainEven = () => {
  const number = getRandomNumber(1, 1000);
  const question = `Question: ${number}`;
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => engine(getMainQuestion, getBrainEven);
