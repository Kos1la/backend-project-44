import { runGame, randomNum } from '../index.js';

const description = 'What is the result of the expression?';

const generateQuestion = () => {
  const num1 = randomNum(1, 10);
  const num2 = randomNum(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[randomNum(0, operators.length - 1)];

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error('Unknown operator');
  }

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: correctAnswer.toString(),
  };
};

const brainCalc = () => runGame(description, generateQuestion);

export default brainCalc;
