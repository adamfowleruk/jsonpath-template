'use strict';

const thismod = require("../src/index");
const expect = require('chai').expect;
const vars = require('./vars.js');

describe('#apply', () => {
  context('Happy Path', () => {
    var tpl;
    var retVal;
    before(async () => {
      tpl = new thismod(vars.happy.tpl);
      retVal = tpl.apply(vars.happy.json);
    });
    it('template should be an object', () => {
      expect(tpl).to.be.an('object');
    });
    it('should return a string', () => {
      expect(retVal).to.be.a('string');
    });
    it('should be equal to expected output', () => {
      expect(retVal).to.eq(vars.happy.expected);
    });
  });

  context('Undefined property', () => {
    var tpl;
    var retVal;
    before(async () => {
      tpl = new thismod(vars.undef.tpl);
      retVal = tpl.apply(vars.undef.json);
    });
    it('template should be an object', () => {
      expect(tpl).to.be.an('object');
    });
    it('should return a string', () => {
      expect(retVal).to.be.a('string');
    });
    it('should be equal to expected output', () => {
      expect(retVal).to.eq(vars.undef.expected);
    });
    it('should not contain the word undefined', () => {
      expect(retVal.indexOf('undefined')).to.eq(-1);
    });
  });

  context('Custom tags', () => {
    var tpl;
    var retVal;
    before(async () => {
      tpl = new thismod(vars.tags.tpl);
      retVal = tpl.tags("[[","]]").apply(vars.tags.json);
    });
    it('template should be an object', () => {
      expect(tpl).to.be.an('object');
    });
    it('should return a string', () => {
      expect(retVal).to.be.a('string');
    });
    it('should be equal to expected output', () => {
      expect(retVal).to.eq(vars.tags.expected);
    });
  });
});
