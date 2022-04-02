#!/usr/bin/env node

import { gcdGame, QUESTION, getGameData } from '../src/games/gcdGame.js';
import { gameStart } from '../src/index.js';

gameStart(gcdGame, QUESTION, getGameData);
