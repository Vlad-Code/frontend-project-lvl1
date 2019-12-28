/* eslint-disable consistent-return */
import {
  beginOfTheGame, getUserName, getQuestion, getAnswer, engine,
} from '../game-engine';

const brainGcd = () => {
  const firstQuestion = 'Find the greatest common divisor of given numbers.';
  beginOfTheGame(firstQuestion);
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const toGetGcd = (num1, num2) => {
    if (num1 > num2) {
      const remainder = num1 % num2;
      if (num2 === 0) {
        return num1;
      }
      return toGetGcd(num2, remainder);
    }
    if (num1 < num2) {
      const remainder = num2 % num1;
      if (num2 === 0) {
        return num1;
      }
      return toGetGcd(num1, remainder);
    }
  };
  for (let i = 1; i <= 3; i += 1) {
    const number1 = getRandomInRange(1, 100);
    const number2 = getRandomInRange(1, 100);
    const rightAnswer = toGetGcd(number1, number2);
    const question = `${number1} ${number2}`;
    getQuestion(question);
    const answer = Number(getAnswer());
    const wrongAnswerCase = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
    const game = engine(answer, rightAnswer, wrongAnswerCase, i, userName);
    if (game === '') {
      break;
    }
  }
};

export default brainGcd;
