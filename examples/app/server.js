var that = require('that')
  , async = require('async')

// Handle errors
that.on('error', console.error);

// bootstrap
require('./plugins/utils');
require('./plugins/server');
require('./plugins/middleware');
require('./plugins/static');
require('./plugins/view');
require('./plugins/controller');

// Bind conf
var conf = require('./etc/config.json');
var tasks = that.listeners('init').map(function (listener) {
  return listener.bind(that, conf);
});

// Init and listen
async.series(tasks, function (err) {
  if (err) return that.emit('error', err);

  that.emit('listen', function () {
    console.log('server listening on port ' + that.server.port);
  });
});