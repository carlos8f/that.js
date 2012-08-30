var that = require('that')
  , async = require('async')

// bootstrap
require('./plugins/utils');
require('./plugins/server');
require('./plugins/middleware');
require('./plugins/static');
require('./plugins/view');
require('./plugins/controller');

// Handle errors
that.on('error', console.error);

// Attach plugins
that.emit('attach', require('./etc/config'));

// Init and listen
async.series(that.listeners('init'), function (err) {
  if (err) return that.emit('error', err);

  that.emit('listen', function () {
    console.log('server listening on port ' + that.server.port);
  });
});