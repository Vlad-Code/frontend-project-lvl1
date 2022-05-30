import engine from '../index.js';
import getRandomNumber from './helpers.js';

const getEuclidsGCD = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  if (num1 > num2) {
    const remains = num1 % num2;
    if (remains === 0) {
      return num2;
    }
    return getEuclidsGCD(num2, remains);
  }
  if (num2 % num1 === 0) {
    return num1;
  }
  const remains = num2 % num1;
  return getEuclidsGCD(num1, remains);
};
const getMainQuestion = () => 'Find the greatest common divisor of given numbers.';
const getBrainGCD = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const question = `Question: ${numberOne} ${numberTwo}`;
  const rightAnswer = getEuclidsGCD(numberOne, numberTwo);
  return [question, rightAnswer];
};

export default () => engine(getMainQuestion, getBrainGCD);
