import readlineSync from 'readline-sync';

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const runGame = (description, generateQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(description);

  const roundsToWin = 3;

  for (let i = 0; i < roundsToWin; i += 1) {
    const { question, correctAnswer } = generateQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  // }

  console.log(`Congratulations, ${userName}!`);
};
