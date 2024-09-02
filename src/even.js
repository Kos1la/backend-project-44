import readlineSync from 'readline-sync';
import sayHello from './cli.js';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = () => {
  const userName = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const number = randomNum(1, 100);
    console.log(`Question ${number}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`
      );
      console.log("Let's try again, Bill!");
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default isEven;
