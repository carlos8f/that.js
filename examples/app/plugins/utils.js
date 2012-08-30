var that = require('that')
  , path = require('path')
  , fs = require('fs')

that.on('init', function (conf, done) {
  that.utils = {
    path: path,
    fs: fs
  };
  done();
});