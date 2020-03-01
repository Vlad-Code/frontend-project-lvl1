import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomFromRange from '../utils';

const task = 'What is the result of the expression?';
const operators = '+-*';
const getOperator = () => {
  const numberOfOperator = getRandomFromRange(0, operators.length - 1);
  return operators[numberOfOperator];
};
const getResult = (num1, num2, symbol) => {
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};
const getQuestionAndRightAnswer = () => {
  const number1 = getRandomFromRange(1, 100);
  const number2 = getRandomFromRange(1, 100);
  const operator = getOperator();
  const question = `${number1} ${operator} ${number2}`;
  const rightAnswer = String(getResult(number1, number2, operator));
  return cons(question, rightAnswer);
};
const brainCalc = () => {
  engine(task, getQuestionAndRightAnswer);
};

export default brainCalc;
