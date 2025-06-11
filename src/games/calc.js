import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 50) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const operations = ['+', '-', '*'];

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = operations[Math.floor(Math.random() * operations.length)];
  const question = `${num1} ${operator} ${num2}`;
  
  let answer;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
  }
  
  return [question, String(answer)];
};

const runCalcGame = (userName) => {
  console.log('What is the result of the expression?');
  
  const maxRounds = 3;
  for (let round = 0; round < maxRounds; round++) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  
  console.log(`Congratulations, ${userName}!`);
};

export default runCalcGame;