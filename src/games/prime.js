import { runGame, randomNum } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
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
