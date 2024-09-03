import readlineSync from 'readline-sync';

export const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const runGame = (description, generateQuestion) => {
  const userName = sayHello();
  console.log(description);

  let correctAnswerCount = 0;
  const roundsToWin = 3;

  while (correctAnswerCount < roundsToWin) {
    const { question, correctAnswer } = generateQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
