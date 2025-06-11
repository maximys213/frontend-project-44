import readlineSync from 'readline-sync';
import startGame from '../index.js';
import { getRandomInt } from '../utils.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i++) {
    const number = getRandomInt(1, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  
  console.log(`Congratulations, ${name}!`);
};

export default () => startGame(primeGame);