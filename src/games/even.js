import runGame from '../index.js';
import randomNum from '../../myFunctions/randomNum.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const generateRound = () => {
  const number = randomNum(1, 100);
  const question = `${number}`;
  const correctAnswer = check(number);
  return [question, correctAnswer];
};

const brainEven = () => runGame(description, generateRound);

export default brainEven;
