import {
  beginOfTheGame, getUserName, getQuestion, getAnswer,
} from '../game-engine';

const brainEven = () => {
  const firstQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';
  beginOfTheGame(firstQuestion);
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomInRange(1, 100);
    const question = `${number}`;
    getQuestion(question);
    const answer = getAnswer();
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default brainEven;
