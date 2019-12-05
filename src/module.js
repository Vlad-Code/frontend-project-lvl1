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
