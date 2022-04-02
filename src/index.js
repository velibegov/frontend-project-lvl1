import {
  greet,
  getQuestionMessage,
  getQuestion,
  getAnswer,
  getRightAnswerMessage,
  getWrongAnswerMessage,
  getWinMessage,
} from './cli.js';

const WIN_COUNT = 3;

export function gameStart(game, question, getGameData) {
  greet();
  getQuestionMessage(question);
  let count = 0;
  while (count < WIN_COUNT) {
    const data = getGameData();
    getQuestion(data);
    const answer = getAnswer();
    if (game(data) === answer) {
      getRightAnswerMessage();
      count += 1;
    } else {
      getWrongAnswerMessage(answer, game(data));
      break;
    }
  }
  if (count === WIN_COUNT) {
    getWinMessage();
  }
}

export default gameStart;
