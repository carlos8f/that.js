var that = require('that')
  , opts

that.on('attach', function (conf) {
  opts = conf.view || {};
  opts.path = that.utils.path.resolve(opts.path);
});

that.on('init', function (done) {
  that.middleware.first(function (req, res, next) {
    res.render = function (template) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      that.utils.fs.createReadStream(opts.path + '/' + template).pipe(res);
    };
    next();
  });
  done();
});