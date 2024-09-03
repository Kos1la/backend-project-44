import { runGame, randomNum } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
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
