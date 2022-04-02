import readlineSync from 'readline-sync';

const WELCOME = 'Welcome to the Brain Games!';
const NAME_QUESTION = 'May I have your name? ';
const GREETING = 'Hello, ';
const QUESTION = 'Question: ';
const ANSWER = 'Your answer: ';

let playerName = '';

export const greet = () => {
  console.log(WELCOME);
  playerName = readlineSync.question(NAME_QUESTION);
  console.log(`${GREETING}${playerName}!`);
};

export const getRandomNumber = (maxValue) => Math.round(Math.random() * maxValue) + 1;

export const getQuestion = (data) => console.log(QUESTION + data);

export const getAnswer = () => readlineSync.question(ANSWER);

export const getQuestionMessage = (question) => console.log(question);

export const getWrongAnswerMessage = (wrong, right) => {
  console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${right}'.`);
  console.log(`Let's try again, ${playerName}!`);
};

export const getRightAnswerMessage = () => console.log('Correct!');

export const getWinMessage = () => console.log(`Congratulations, ${playerName}!`);

export default greet;
