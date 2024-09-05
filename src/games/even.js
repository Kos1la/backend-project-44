import { runGame, randomNum } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const number = randomNum(1, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number);
  return [question, correctAnswer];
};

const brainEven = () => runGame(description, generateRound);

export default brainEven;
