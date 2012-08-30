var that = require('that')
  , controller = that.controller()

controller.get('/about', function (req, res, next) {
  res.render('about.html');
});

that.controllers.push(controller);