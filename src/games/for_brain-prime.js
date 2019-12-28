import {
  beginOfTheGame, getUserName, getQuestion, getAnswer, engine,
} from '../game-engine';

const brainPrime = () => {
  const firstQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  beginOfTheGame(firstQuestion);
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const toGetIsPrime = (number) => {
    for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
      if (number % divider === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  for (let i = 1; i <= 3; i += 1) {
    const givenNumber = getRandomInRange(1, 1000);
    const rightAnswer = toGetIsPrime(givenNumber);
    const question = `${givenNumber}`;
    getQuestion(question);
    const answer = getAnswer();
    const wrongAnswerCase = "'yes' is wrong answer ;(. Correct answer was 'no'.";
    const game = engine(answer, rightAnswer, wrongAnswerCase, i, userName);
    if (game === '') {
      break;
    }
  }
};

export default brainPrime;
