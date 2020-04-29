/**
 * app.js - YAD application main program
 *
 * Copyright (c) 2020 Flavio Augusto (@facmachado)
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */


/* jshint esversion: 6 */


/**
 * Initialize
 */

import { spawn } from 'child_process';
import server from './lib/server.js';

const run = spawn('/bin/bash', [
  'bash/run.sh', process.env.NODE_ENV
]);


/**
 * Finish (except for development)
 */
run.on('close', _ => process.exit(0));
