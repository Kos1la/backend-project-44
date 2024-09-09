import runGame from '../index.js';
import randomNum from '../../myFunctions/randomNum.js';

const description = 'What number is missing in the progression?';
const arrayLength = 10;

const generateProgression = (start, step) => {
  const progression = [];

  for (let i = 0; i < arrayLength; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = randomNum(1, 10);
  const step = randomNum(2, 10);

  const array = generateProgression(start, step);
  const hiddenIndex = randomNum(0, array.length - 1);

  const correctAnswer = array[hiddenIndex].toString();
  array[hiddenIndex] = '..';
  const question = array.join(' ');

  return [question, correctAnswer];
};

const brainProgression = () => runGame(description, generateRound);

export default brainProgression;
