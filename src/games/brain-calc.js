import engine from '../index.js';
import getRandomNumber from './helpers.js';

const operators = ['+', '-', '*'];
const getRightAnswer = (num1, num2, oper) => {
  switch (oper) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      throw new Error(`Unknown operator: ${oper}!`);
  }
};
const getMainQuestion = () => 'What is the result of the expression?';
const getCalculator = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, 2)];
  const question = `Question: ${numberOne} ${operator} ${numberTwo}`;
  const rightAnswer = getRightAnswer(numberOne, numberTwo, operator);
  return [question, rightAnswer];
};

export default () => engine(getMainQuestion, getCalculator);
