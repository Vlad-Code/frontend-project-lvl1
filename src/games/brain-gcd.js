import engine from '../index.js';
import getRandomNumber from './helpers.js';

const getEuclidsGCD = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  if (num1 > num2) {
    const newNum1 = num1 - num2;
    return getEuclidsGCD(newNum1, num2);
  }
  const newNum2 = num2 - num1;
  return getEuclidsGCD(num1, newNum2);
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
