var that = require('that')
  , path = require('path')
  , fs = require('fs')

that.on('attach', function (conf) {
  that.utils = {
    path: path,
    fs: fs
  };
});