import { runGame, randomNum } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  return a + b;
};

const generateQuestion = () => {
  const num1 = randomNum(1, 100);
  const num2 = randomNum(1, 100);

  const correctAnswer = gcd(num1, num2);

  return {
    question: `${num1} ${num2}`,
    correctAnswer: correctAnswer.toString(),
  };
};

const brainGcd = () => runGame(description, generateQuestion);

export default brainGcd;
