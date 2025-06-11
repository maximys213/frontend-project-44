import askName from '../src/cli.js';
import runEvenGame from '../src/games/even.js';

const userName = askName();
runEvenGame(userName);