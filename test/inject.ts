/// <reference path="../lib//all.d.ts" />

import * as chai from 'chai';
import * as sinon from 'sinon';

import {Inject} from '../lib/inject';

let expect = chai.expect;

describe('Inject', function() {
  
  it ('should be defined', () => {
    expect(Inject).to.be.ok;
  })

});