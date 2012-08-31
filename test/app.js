var assert = require('assert')
  , http = require('http')
  , spawn = require('child_process').spawn
  , resolve = require('path').resolve
  , parseUrl = require('url').parse

function get (url, cb) {
  http.get(parseUrl(url), function (res) {
    var data = '';
    res.once('error', cb);
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on('end', function () {
      cb(null, res, data);
    });
  });
}

describe('app example', function () {
  var proc;

  before(function (done) {
    proc = spawn('node', ['server'], {cwd: resolve(__dirname, '../examples/app')});
    proc.stdout.on('data', function (chunk) {
      if (chunk.toString().match(/listening/)) {
        done();
      }
    });
    process.once('exit', function () {
      proc.kill();
    });
  });

  it('serves homepage', function (done) {
    get('http://localhost:3000/', function (err, res, data) {
      assert.ifError(err);
      assert.equal(res.statusCode, 200);
      assert(res.headers['content-type'].match(/^text\/html/));
      assert(data.match(/hello world/));
      done();
    });
  });

  it('serves /about', function (done) {
    get('http://localhost:3000/about', function (err, res, data) {
      assert.ifError(err);
      assert.equal(res.statusCode, 200);
      assert(res.headers['content-type'].match(/^text\/html/));
      assert(data.match(/we are awesome/));
      done();
    });
  });

  it('serves /style.css', function (done) {
    get('http://localhost:3000/style.css', function (err, res, data) {
      assert.ifError(err);
      assert.equal(res.statusCode, 200);
      assert(res.headers['content-type'].match(/^text\/css/));
      assert(data.match(/background\-color/));
      done();
    });
  });
});