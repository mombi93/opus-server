import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import { expect } from 'chai';
import express from 'express';
import user from '../user';

decribe('Test user', (done) => {

  beforeEach(() => app.use(user));

  it('It should return status 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);    
  });

});
