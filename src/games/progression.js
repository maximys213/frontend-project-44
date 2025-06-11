import readlineSync from 'readline-sync';
import { getRandomInt } from '../utils.js';

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const progressionGame = (name) => {
  console.log('What number is missing in the progression?');
  
  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i++) {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 20);
    const step = getRandomInt(1, 10);
    
    const progression = generateProgression(length, start, step);
    const hiddenIndex = getRandomInt(0, length - 1);
    const correctAnswer = progression[hiddenIndex];
    
    // Копируем прогрессию и заменяем один элемент на '..'
    const questionProgression = [...progression];
    questionProgression[hiddenIndex] = '..';
    
    console.log(`Question: ${questionProgression.join(' ')}`);
    
    const answer = readlineSync.question('Your answer: ');
    
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  
  console.log(`Congratulations, ${name}!`);
};

export default progressionGame;