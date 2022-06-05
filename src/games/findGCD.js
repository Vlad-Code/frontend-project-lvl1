import launch from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (numberOne, numberTwo) => {
  if (numberOne === numberTwo) {
    return numberOne;
  }
  if (numberOne > numberTwo) {
    const newNumberOne = numberOne - numberTwo;
    return getGCD(newNumberOne, numberTwo);
  }
  const newNumberTwo = numberTwo - numberOne;
  return getGCD(numberOne, newNumberTwo);
};

const getBrainGCD = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const question = `Question: ${numberOne} ${numberTwo}`;
  const rightAnswer = String(getGCD(numberOne, numberTwo));
  return [question, rightAnswer];
};

export default () => launch(description, getBrainGCD);
