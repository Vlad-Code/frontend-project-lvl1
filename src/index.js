import readlineSync from 'readline-sync';

export default (getMainQuestion, getQuestionAndRightAnswer) => {
  const mainQuestion = getMainQuestion();
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(mainQuestion);
  for (let i = 0; i <= 2; i += 1) {
    const [question, rightAnswer] = getQuestionAndRightAnswer();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== String(rightAnswer)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
