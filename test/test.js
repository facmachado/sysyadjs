/**
 * test.js - YAD application test program
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

import server from '../lib/server.js';
import Mocha from 'mocha';
import path from 'path';
import fs from 'fs';

const mocha = new Mocha(),
  dir = 'test';


/**
 * Find tests
 */

fs.readdirSync(dir).filter(
  file => (path.extname(file) === '.cjs')
).forEach(
  file => mocha.addFile(path.join(dir, file))
);


/**
 * Run mocha
 */

mocha.run(err => {
  process.exitCode = err ? 1 : 0;
  process.exit(process.exitCode);
});
