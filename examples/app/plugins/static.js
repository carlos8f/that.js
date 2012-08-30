var that = require('that')
  , buffet
  , opts

that.on('attach', function (conf) {
  opts = conf.static || {};
  buffet = require('buffet')(opts.root, opts);
});

that.on('init', function (done) {
  that.middleware
    .first(buffet)
    .last(buffet.notFound)

  done();
});