import engine from '../new_game-engine';

import getRandomInRange from '../for_all_games';

const brainEven = () => {
  const firstQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';
  const getQuestionAndRightAnswer = () => {
    const number = getRandomInRange(1, 1000);
    console.log(`Question: ${number}`);
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  engine(firstQuestion, getQuestionAndRightAnswer);
};

export default brainEven;
