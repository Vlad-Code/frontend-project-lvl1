import engine from '../game-engine';

import getRandomInRange from '../for_all_games';

const brainPrime = () => {
  const firstQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const toGetIsPrime = (number) => {
    for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
      if (number % divider === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const getQuestionAndRightAnswer = () => {
    const number = getRandomInRange(1, 1000);
    console.log(`Question: ${number}`);
    return toGetIsPrime(number);
  };
  engine(firstQuestion, getQuestionAndRightAnswer);
};

export default brainPrime;
