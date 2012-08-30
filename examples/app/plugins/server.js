var that = require('that')
  , http = require('http')
  , opts

that.on('attach', function (conf) {
  opts = conf.server || {};
  that.server = http.createServer();
  that.server.on('error', that.emit.bind(that, 'error'));
});

that.on('listen', function (done) {
  that.server.listen(opts.port || 0, function () {
    that.server.port = that.server.address().port;
    if (done) that.once('listening', done);
    that.emit('listening');
  });
});