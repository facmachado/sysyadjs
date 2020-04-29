/**
 * 0001-first-task.test.cjs
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

const chai = require('chai'),
  ch = require('chai-http'),
  expect = chai.expect;

chai.use(ch);


/**
 * Start test
 */

describe('0001. First task', _ => {
  it('Call server', done => {
    chai
      .request('http://localhost:3000/')
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      });
    done();
  });
});
