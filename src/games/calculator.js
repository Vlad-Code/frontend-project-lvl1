import launch from '../index.js';
import getRandomNumber from '../helpers.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      throw new Error(`Unknown operator: ${operator}!`);
  }
};

const getCalculator = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `Question: ${numberOne} ${operator} ${numberTwo}`;
  const rightAnswer = String(calculate(numberOne, numberTwo, operator));
  return [question, rightAnswer];
};

export default () => launch(description, getCalculator);
