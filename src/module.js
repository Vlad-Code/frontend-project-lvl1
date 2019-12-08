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
