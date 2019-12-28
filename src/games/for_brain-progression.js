import {
  beginOfTheGame, getUserName, getQuestion, getAnswer, engine,
} from '../game-engine';

const brainProgression = () => {
  const firstQuestion = 'What number is missing in the progression?';
  beginOfTheGame(firstQuestion);
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const toGetProgression = (firstNum, addedNum, miss) => {
    let progression = '';
    for (let n = 1; n <= 10; n += 1) {
      let number = firstNum + (n - 1) * addedNum;
      if (n === miss) {
        number = '..';
      }
      progression = `${progression} ${number}`;
    }
    return progression;
  };
  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = getRandomInRange(1, 100);
    const addedNum = getRandomInRange(1, 10);
    const numberOfMissedNumber = getRandomInRange(1, 10);
    // eslint-disable-next-line max-len
    const missedNumber = (2 * firstNumber + (numberOfMissedNumber - 2) * addedNum + numberOfMissedNumber * addedNum) / 2;
    const rightAnswer = (numberOfMissedNumber === 1) ? firstNumber : missedNumber;
    const myProgression = toGetProgression(firstNumber, addedNum, numberOfMissedNumber);
    const question = `${myProgression}`;
    getQuestion(question);
    const answer = Number(getAnswer());
    const wrongAnswerCase = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
    const game = engine(answer, rightAnswer, wrongAnswerCase, i, userName);
    if (game === '') {
      break;
    }
  }
};

export default brainProgression;
