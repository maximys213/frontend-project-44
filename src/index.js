import readlineSync from 'readline-sync';

const startGame = (gameLogic) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    gameLogic(name);
};

export default startGame;