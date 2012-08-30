var that = require('that')
  , http = require('http')

that.on('init', function (conf, done) {
  var opts = conf.server || {};
  that.server = http.createServer();
  that.server.on('error', that.emit.bind(that, 'error'));

  that.on('listen', function (cb) {
    that.server.listen(opts.port || 0, function () {
      that.server.port = that.server.address().port;
      if (cb) that.once('listening', cb);
      that.emit('listening');
    });
  });
  done();
});