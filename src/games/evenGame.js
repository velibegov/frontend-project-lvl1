import { getRandomNumber } from '../cli.js';

export const QUESTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const MAX_VALUE = 101;

export function getGameData() {
  return getRandomNumber(MAX_VALUE);
}

const isEven = (number) => number % 2 === 0;

export function evenGame(data) {
  return isEven(data) ? 'yes' : 'no';
}

export default evenGame;
