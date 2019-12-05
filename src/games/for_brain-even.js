import readlineSync from 'readline-sync';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const task = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomInRange(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
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

export default task;
