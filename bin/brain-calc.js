#!/usr/bin/env node

import { calcGame, QUESTION, getGameData } from '../src/games/calcGame.js';
import { gameStart } from '../src/index.js';

gameStart(calcGame, QUESTION, getGameData);
