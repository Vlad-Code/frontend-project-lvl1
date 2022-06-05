import launch from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getBrainPrime = () => {
  const number = getRandomNumber(0, 1000);
  const question = `Question: ${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => launch(description, getBrainPrime);
