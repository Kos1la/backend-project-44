import runGame from '../index.js';
import randomNum from '../../myFunctions/randomNum.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = randomNum(1, 1000);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;

  return [question, correctAnswer];
};

const brainPrime = () => runGame(description, generateRound);

export default brainPrime;
