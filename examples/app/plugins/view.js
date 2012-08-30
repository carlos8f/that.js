var that = require('that')

that.on('init', function (conf, done) {
  var opts = conf.view || {};
  opts.path = that.utils.path.resolve(opts.path);

  that.middleware.first(function (req, res, next) {
    res.render = function (template) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      that.utils.fs.createReadStream(opts.path + '/' + template).pipe(res);
    };
    next();
  });
  done();
});