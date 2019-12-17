/* eslint-disable no-unreachable */
export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getOperator = () => {
  const myString = '+-*';
  const numberOfSymbol = getRandomInRange(0, 2);
  return myString[numberOfSymbol];
};

export const getResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
      // no default
  }
};

export const toGetGcd = (num1, num2) => {
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

export const toGetProgression = (firstNum, d, miss) => {
  let progression = '';
  for (let n = 1; n <= 10; n += 1) {
    let number = firstNum + (n - 1) * d;
    if (n === miss) {
      number = '..';
    }
    progression = `${progression} ${number}`;
  }
  return progression;
};

export const toGetIsPrime = (number) => {
  for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
    if (number % divider === 0) {
      return 'no';
    }
  }
  return 'yes';
};
