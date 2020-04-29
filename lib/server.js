/**
 * server.js - Web server for YAD application (using Express)
 *
 * Copyright (c) 2020 Flavio Augusto (@facmachado)
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 *
 * Usage: import server from './server.js';
 */


/* jshint esversion: 6 */


/**
 * Initialize
 */

// import { spawn } from 'child_process';
import express from 'express';

const server = express();


/**
 * Block production for use only on YAD (Yet Another Dialog)
 */

server.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && process.env.UA !== req.get('user-agent')) {
    res.send('Production environment denied for Internet browsers (Use YAD)');
    return;
  }
  next();
});

server.use(express.static('public', {
  setHeaders: res => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT');
    res.setHeader('Robots', 'noindex, nofollow, noarchive');
    res.setHeader('X-UA-Compatible', 'IE=edge, chrome=1');
  }
}));


// ----------------------------------------------------------------------------

/**
 * The RESTful API HTTP commands
 */

server.post('/data', (req, res) => res.send('/data OK'));


// ----------------------------------------------------------------------------

/**
 * Server UP using environment variables
 */
server.listen(process.env.PORT, process.env.HOST, _ => {
  if (process.env.NODE_ENV !== 'testing') {
    console.log(`Server started at port ${process.env.PORT}`);
  }
});

/**
 * Send back to app.js
 */
export default server;
