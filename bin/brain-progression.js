#!/usr/bin/env node

import {
  progressionGame,
  QUESTION,
  getGameData,
} from '../src/games/progressionGame.js';

import { gameStart } from '../src/index.js';

gameStart(progressionGame, QUESTION, getGameData);
