import { runGame, randomNum } from '../index.js';

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestion = () => {
  const number = randomNum(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return {
    question: `${number}`,
    correctAnswer,
  };
};

const brainEven = () => runGame(description, generateQuestion);

export default brainEven;
