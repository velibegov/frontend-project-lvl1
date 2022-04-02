#!/usr/bin/env node

import { evenGame, QUESTION, getGameData } from '../src/games/evenGame.js';
import { gameStart } from '../src/index.js';

gameStart(evenGame, QUESTION, getGameData);
