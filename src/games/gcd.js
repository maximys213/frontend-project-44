import readlineSync from 'readline-sync';
import getRandomInt from '../utils.js';

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const gcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  
  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i++) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const correctAnswer = String(gcd(num1, num2));
    
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  
  console.log(`Congratulations, ${name}!`);
};

export default gcdGame;