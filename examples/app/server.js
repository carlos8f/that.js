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

// Init
async.series(that.listeners('init'), function (err) {
  that.emit('listen', function () {
    console.log('server listening on port ' + that.server.port);
  });
});