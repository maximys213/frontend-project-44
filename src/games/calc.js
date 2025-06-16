export const getRandomNumber = (min = 1, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const operators = ['+', '-', '*']

const calculate = (a, operator, b) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: throw new Error(`Unknown operator: ${operator}`)
  }
}

export const generateRound = () => {
  const a = getRandomNumber(1, 25)
  const b = getRandomNumber(1, 25)
  const operator = operators[Math.floor(Math.random() * operators.length)]
  const question = `${a} ${operator} ${b}`
  const answer = String(calculate(a, operator, b))
  return [question, answer]
}

export const rules = 'What is the result of the expression?'
