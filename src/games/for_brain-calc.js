/* eslint-disable consistent-return */
/* eslint-disable default-case */
import engine from '../game-engine';

import getRandomInRange from '../for_all_games';

const brainCalc = () => {
  const firstQuestion = 'What is the result of the expression?';
  const getOperator = () => {
    const myString = '+-*';
    const numberOfSymbol = getRandomInRange(0, 2);
    return myString[numberOfSymbol];
  };
  const getResult = (num1, num2, symbol) => {
    switch (symbol) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
    }
  };
  const getQuestionAndRightAnswer = () => {
    const number1 = getRandomInRange(1, 100);
    const number2 = getRandomInRange(1, 100);
    const operator = getOperator();
    console.log(`Question: ${number1} ${operator} ${number2}`);
    return getResult(number1, number2, operator);
  };
  engine(firstQuestion, getQuestionAndRightAnswer);
};

export default brainCalc;
