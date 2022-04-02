import { getRandomNumber } from '../cli.js';

export const QUESTION = 'What is the result of the expression?';

const ACTIONS = ['+', '-', '*'];
const ACTIONS_COUNT = 3;
const MAX_VALUE = 10;

const getRandomAction = () => ACTIONS[getRandomNumber(ACTIONS_COUNT - 1)];

export function getGameData() {
  return `${getRandomNumber(MAX_VALUE)} ${getRandomAction()} ${getRandomNumber(
    MAX_VALUE,
  )}`;
}

export function calcGame(data) {
  const expressionParts = data.split(' ');
  let result = 0;
  switch (expressionParts[1]) {
    case '+':
      result = expressionParts[0] + expressionParts[2];
      break;
    case '-':
      result = expressionParts[0] - expressionParts[2];
      break;
    case '*':
      result = expressionParts[0] * expressionParts[2];
      break;
    default:
  }
  return String(result);
}

export default calcGame;
