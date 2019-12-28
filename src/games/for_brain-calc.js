/* eslint-disable consistent-return */
/* eslint-disable default-case */
import {
  beginOfTheGame, getUserName, getQuestion, getAnswer, engine,
} from '../game-engine';

const brainCalc = () => {
  const firstQuestion = 'What is the result of the expression?';
  beginOfTheGame(firstQuestion);
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const getOperator = () => {
    const myString = '+-*';
    const numberOfSymbol = getRandomInRange(0, 2);
    return myString[numberOfSymbol];
  };
  const getResult = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
    }
  };
  for (let i = 1; i <= 3; i += 1) {
    const number1 = getRandomInRange(1, 100);
    const number2 = getRandomInRange(1, 100);
    const operator = getOperator();
    const rightAnswer = getResult(number1, number2, operator);
    const question = `${number1} ${operator} ${number2}`;
    getQuestion(question);
    const answer = Number(getAnswer());
    const wrongAnswerCase = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
    const game = engine(answer, rightAnswer, wrongAnswerCase, i, userName);
    if (game === '') {
      break;
    }
  }
};

export default brainCalc;
