import { getRandomNumber } from '../cli.js'

const calculateGCD = (a, b) => {
  return b === 0 ? a : calculateGCD(b, a % b)
}

export const generateRound = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const question = `${num1} ${num2}`
  const answer = String(calculateGCD(num1, num2))
  return [question, answer]
}

export const rules = 'Find the greatest common divisor of given numbers.'
