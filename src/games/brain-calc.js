import { cons } from '@hexlet/pairs';

import engine from '../game-engine';

import getRandomInRange from '../utils';

const firstQuestion = 'What is the result of the expression?';
const numberOfRounds = 3;
const getOperator = () => {
  const operatorList = '+-*';
  const numberOfSymbol = getRandomInRange(0, operatorList.length - 1);
  return operatorList[numberOfSymbol];
};
const getResult = (num1, num2, symbol) => {
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};
const getQuestionAndRightAnswer = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);
  const operator = getOperator();
  const question = `${number1} ${operator} ${number2}`;
  const rightAnswer = String(getResult(number1, number2, operator));
  return cons(question, rightAnswer);
};
const brainCalc = () => {
  engine(firstQuestion, getQuestionAndRightAnswer, numberOfRounds);
};

export default brainCalc;
