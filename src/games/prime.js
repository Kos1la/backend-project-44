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

const generateQuestion = () => {
  const number = randomNum(1, 1000);
  let correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question: `${number}`,
    correctAnswer,
  };
};

const brainPrime = () => runGame(description, generateQuestion);

export default brainPrime;
