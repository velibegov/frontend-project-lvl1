import { getRandomNumber } from '../cli.js';

export const QUESTION = 'Find the greatest common divisor of given numbers.';

const MAX_VALUE = 30;

export function getGameData() {
  return `${+getRandomNumber(MAX_VALUE) + 1} ${
    +getRandomNumber(MAX_VALUE) + 1
  }`;
}

export function gcdGame(data) {
  let [first, second] = data.split(' ');
  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }
  return String(+first + +second);
}

export default gcdGame;
