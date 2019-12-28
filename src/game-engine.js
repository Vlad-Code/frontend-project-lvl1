import readlineSync from 'readline-sync';

export const beginOfTheGame = (firstQuestion) => console.log(`Welcome to the Brain Games!\n${firstQuestion}`);

export const getUserName = () => readlineSync.question('May I have your name? ');

export const getQuestion = (question) => console.log(`Question: ${question}`);

export const getAnswer = () => readlineSync.question('Your answer: ');

export const engine = (answer, rightAnswer, wrongAnswerCase, i, userName) => {
  if (answer === rightAnswer) {
    console.log('Correct!');
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
    return 'yes';
  }
  console.log(`${wrongAnswerCase}\nLet's try again, ${userName}!`);
  return '';
};
