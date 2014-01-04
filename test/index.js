var expect = require('chai').expect;
var add = require('../');

describe('1 + 2', function() {
  it('=3', function(done) {
    expect(add(1, 2)).to.equal(3);
    done();
  });
});

