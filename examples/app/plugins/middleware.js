var that = require('that')
  , middler = require('middler')

that.on('init', function (conf, done) {
  that.middler = middler;
  that.middleware = middler(that.server);
  done();
});