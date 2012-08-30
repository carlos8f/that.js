var that = require('that')
  , glob = require('glob')
  , opts

that.on('attach', function (conf) {
  opts = conf.controller || {};
  that.controller = that.middler;
  that.controllers = [];
});

that.on('init', function (done) {
  var search = glob(opts.files);
  search.on('match', function (file) {
    require(that.utils.path.resolve(file));
  });
  search.once('error', done);
  search.once('end', function () {
    that.controllers.forEach(function (controller) {
      that.middleware.add(controller.handler);
    });
    done();
  });
});