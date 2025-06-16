import readlineSync from 'readline-sync'


console.log('Welcome to the Brain Games!');


const name = readlineSync.question('what your name? ');
console.log(`Hello, ${name}!`)
