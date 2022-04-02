import { getRandomNumber } from '../cli.js';

export const QUESTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const MAX_VALUE = 20;

export function getGameData() {
  return getRandomNumber(MAX_VALUE);
}

const isPrime = (number) => {
  if (number === 1) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export function primeGame(data) {
  return isPrime(data) ? 'yes' : 'no';
}

export default primeGame;
