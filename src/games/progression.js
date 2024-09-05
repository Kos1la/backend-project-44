import { runGame, randomNum } from '../index.js';

const description = 'What number is missing in the progression?';

const generateArray = (start, step) => {
  const array = [];

  array.push(start);

  for (let i = 0; i < 9; i += 1) {
    array.push(array[i] + step);
  }
  return array;
};

const generateRound = () => {
  const start = randomNum(1, 10);
  const step = randomNum(2, 10);

  const array = generateArray(start, step);
  const hiddenNum = randomNum(0, array.length - 1);

  const correctAnswer = array[hiddenNum].toString();
  array[hiddenNum] = '..';
  const question = array.join(' ');

  return [question, correctAnswer];
};

const brainProgression = () => runGame(description, generateRound);

export default brainProgression;
