var that = require('that')
  , controller = that.controller()

controller.get('/', function (req, res, next) {
  res.render('index.html');
});

that.controllers.push(controller);