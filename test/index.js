var expect = require('expect.js');
var add = require('../');

describe('1 + 2', function() {
  it('=3', function(done) {
    expect(add(1, 2)).to.be(3);
    done();
  });
});

