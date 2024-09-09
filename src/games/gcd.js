import runGame from '../index.js';
import randomNum from '../../myFunctions/randomNum.js';

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

const qenerateRound = () => {
  const num1 = randomNum(1, 100);
  const num2 = randomNum(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();

  return [question, correctAnswer];
};

const brainGcd = () => runGame(description, qenerateRound);

export default brainGcd;
