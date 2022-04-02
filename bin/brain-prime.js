#!/usr/bin/env node

import { primeGame, QUESTION, getGameData } from '../src/games/primeGame.js';

import { gameStart } from '../src/index.js';

gameStart(primeGame, QUESTION, getGameData);
