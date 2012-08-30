// that.js
// copyright (c) 2012 Carlos Rodriguez
// MIT Licensed

// **** BEGIN IMPLEMENTATION ****
module.exports = new(require('events').EventEmitter);
module.exports.setMaxListeners(0);