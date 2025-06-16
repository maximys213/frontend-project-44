import { getRandomNumber } from '../cli.js'

const isEven = num => num % 2 === 0

export const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const question = String(number)
  const answer = isEven(number) ? 'yes' : 'no'
  return [question, answer]
}

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
