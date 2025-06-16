import { getRandomNumber } from '../cli.js'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) return false
  }
  return true
}

export const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const question = String(number)
  const answer = isPrime(number) ? 'yes' : 'no'
  return [question, answer]
}

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
