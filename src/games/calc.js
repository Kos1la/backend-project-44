import runGame from '../index.js';
import randomNum from '../myFunctions/randomNum.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const num1 = randomNum(1, 10);
  const num2 = randomNum(1, 10);
  const operator = operators[randomNum(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calc(num1, num2, operator).toString();

  return [question, correctAnswer];
};

const brainCalc = () => runGame(description, generateRound);

export default brainCalc;
