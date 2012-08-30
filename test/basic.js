var assert = require('assert');

describe('basic test', function () {
  var that;

  before(function () {
    that = require('../');
  });

  after(function () {
    delete that;
  });

  it('just like that', function () {
    assert.strictEqual(that, that);
  });

  it('listens to that', function () {
    that.on('music', function () {
      that.emit('wow');
    });
  });

  it('heard that', function (done) {
    that.on('wow', done);
    that.emit('music');
  });
});