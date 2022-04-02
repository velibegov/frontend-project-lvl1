import { getRandomNumber } from '../cli.js';

export const QUESTION = 'What number is missing in the progression?';

const MAX_START_VALUE = 101;
const MAX_STEP = 11;
const LENGTH = 7;
const REPLACEMENT = '..';

export function getGameData() {
  const result = [getRandomNumber(MAX_START_VALUE)];
  const step = getRandomNumber(MAX_STEP) + 1;
  for (let i = 1; i < LENGTH; i += 1) {
    result[i] = result[i - 1] + step;
  }
  const randomNumber = getRandomNumber(LENGTH - 1);
  result[randomNumber] = REPLACEMENT;
  return result.join(' ');
}

export function progressionGame(data) {
  const numbers = data.split(' ');
  const index = numbers.indexOf(REPLACEMENT);
  let result = null;
  switch (index) {
    case 0:
      result = +numbers[1] - (+numbers[2] - +numbers[1]);
      break;
    case LENGTH - 1:
      result = +numbers[LENGTH - 2] - +numbers[LENGTH - 3] + +numbers[LENGTH - 2];
      break;
    default:
      result = (+numbers[index - 1] + +numbers[index + 1]) / 2;
  }
  return String(result);
}
export default progressionGame;
