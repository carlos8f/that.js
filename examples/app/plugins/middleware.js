var that = require('that')
  , middler = require('middler')

that.on('attach', function (conf) {
  that.middler = middler;
});

that.on('init', function (done) {
  that.middleware = middler(that.server);
  done();
});