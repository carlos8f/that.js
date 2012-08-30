var that = require('that')
  , buffet

that.on('init', function (conf, done) {
  var opts = conf.static || {}
    , buffet = require('buffet')(opts.root, opts);

  that.middleware
    .first(buffet)
    .last(buffet.notFound)

  done();
});